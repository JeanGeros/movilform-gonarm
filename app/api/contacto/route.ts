import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Verifica el token de Cloudflare Turnstile. Sin secret real: en dev usa la test
// key (siempre pasa); en prod falla cerrado.
// ponytail: test key en dev; en prod requiere TURNSTILE_SECRET_KEY seteada en Vercel.
async function verifyTurnstile(token: string | undefined): Promise<boolean> {
  const secret =
    process.env.TURNSTILE_SECRET_KEY ||
    (process.env.NODE_ENV !== "production" ? "1x0000000000000000000000000000000AA" : "");
  if (!token || !secret) return false;
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const { nombre, apellido, correo, telefono, asunto, mensaje, token } = await req.json();

  if (!nombre?.trim() || !apellido?.trim() || !correo?.trim() || !asunto?.trim()) {
    return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(correo)) {
    return NextResponse.json({ error: "Correo inválido." }, { status: 400 });
  }

  if (!(await verifyTurnstile(token))) {
    return NextResponse.json({ error: "Verificación anti-spam fallida. Intenta de nuevo." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"MovilForm Contacto" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: correo,
      subject: `Nuevo mensaje de contacto — ${asunto}`,
      html: `
        <h2 style="color:#e22939">Nuevo mensaje desde el formulario</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)} ${escapeHtml(apellido)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(correo)}</p>
        <p><strong>Teléfono:</strong> ${telefono ? escapeHtml(telefono) : "—"}</p>
        <p><strong>Asunto:</strong> ${escapeHtml(asunto)}</p>
        <p><strong>Mensaje:</strong></p>
        <p style="white-space:pre-line">${mensaje ? escapeHtml(mensaje) : "—"}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ error: "Error al enviar el mensaje. Inténtalo más tarde." }, { status: 500 });
  }
}
