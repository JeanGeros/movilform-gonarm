function LogoIcon() {
  return (
    <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="26" height="28" rx="3" fill="#e42433" opacity="0.35" />
      <rect x="8" y="1" width="26" height="28" rx="3" fill="#e42433" />
      <line x1="14" y1="9"  x2="28" y2="9"  stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14" y1="15" x2="28" y2="15" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <line x1="14" y1="21" x2="22" y2="21" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const SERVICIOS = [
  { label: "Formularios Digitales",  href: "/servicios/formularios-digitales" },
  { label: "Módulo de Rutas",        href: "/servicios/modulo-de-rutas" },
  { label: "Módulo de Tareas",       href: "/servicios/modulo-de-tareas" },
  { label: "Reportes y Dashboards",  href: "/servicios/reportes-y-dashboards" },
  { label: "Integraciones",          href: "/servicios/integraciones" },
  { label: "Portal de Clientes",     href: "/servicios/portal-de-clientes" },
];

const CASOS_DE_USO = [
  "Empresa de Gestión de Residuos",
  "Empresa de Telecomunicaciones",
  "Empresa Control de Plagas",
  "Empresa Servicio Técnico",
  "Empresas de Servicio de higiene",
];

export default function Footer() {
  return (
    <footer className="pb-10">
      {/* Card */}
      <div className="mx-[70px] bg-[#feeaed] rounded-[20px] px-[70px] py-14">
        <div className="grid grid-cols-[220px_1fr_1fr_1fr] gap-8">

          {/* Logo */}
          <div className="flex items-start pt-1">
            <a href="/" className="flex items-center gap-2">
              <LogoIcon />
              <span className="font-satoshi text-[22px] leading-none">
                <span className="font-black text-black">movil</span>
                <span className="font-black text-[#e42433]">form</span>
              </span>
            </a>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-satoshi text-[18px] font-bold text-[#192437] mb-5">
              Servicios
            </h4>
            <ul className="space-y-2">
              {SERVICIOS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-satoshi text-[15px] text-[#e42433] hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Casos de uso */}
          <div>
            <h4 className="font-satoshi text-[18px] font-bold text-[#192437] mb-5">
              Casos de uso
            </h4>
            <ul className="space-y-2">
              {CASOS_DE_USO.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-satoshi text-[15px] text-[#e42433] hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-satoshi text-[18px] font-bold text-[#192437] mb-5">
              Información de contacto
            </h4>
            <p className="font-satoshi text-[15px] text-[#192437]">Teléfono:</p>
            <p className="font-satoshi text-[15px] text-[#e42433] mt-1">+56 232241522</p>
            <p className="font-satoshi text-[15px] text-[#192437] mt-4">Correo Electrónico:</p>
            <a
              href="mailto:contacto@movilform.com"
              className="font-satoshi text-[15px] text-[#e42433] mt-1 block hover:underline"
            >
              contacto@movilform.com
            </a>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="mx-[70px] mt-6 border-t border-[#ddd]" />

      {/* Bottom bar */}
      <div className="mx-[70px] mt-4 flex items-center justify-between">
        <p className="font-satoshi text-[14px] text-[#e42433]">
          MovilForm • Todos los derechos reservados © 2018
        </p>
        <p className="font-satoshi text-[14px] text-[#e42433]">
          Diseñado y Desarrollado por GonArm
        </p>
      </div>
    </footer>
  );
}
