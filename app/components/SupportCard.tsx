import Image from "next/image";

interface SupportCardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
  href: string;
  label: string;
  external?: boolean;
}

export default function SupportCard({ icon, alt, title, description, href, label, external }: SupportCardProps) {
  return (
    <div className="bg-[#feeaed] rounded-[20px] p-10 flex flex-col items-center text-center">
      <div className="w-[200px] h-[100px] rounded-full bg-[#feeaed] flex items-center justify-center">
        <Image src={icon} alt={alt} width={100} height={80} className="w-[100px] h-[100px] object-contain" />
      </div>
      <h2 className="font-satoshi mt-8 text-[24px] font-bold text-[#e42433] leading-[30px]">
        {title}
      </h2>
      <p className="font-satoshi mt-4 text-[16spx] text-[#3f4648] leading-[26px] max-w-[260px]">
        {description}
      </p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-satoshi mt-8 inline-flex items-center justify-center h-[46px] px-8 rounded-full bg-[#e42433] text-white text-[17.6px] font-extrabold hover:bg-[#c01f2d] transition-colors"
      >
        {label}
      </a>
    </div>
  );
}
