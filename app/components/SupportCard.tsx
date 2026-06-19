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
    <div className="bg-[#feeaed] rounded-[20px] p-6 md:p-10 flex flex-col items-center text-center">
      <div className="w-[120px] h-[60px] md:w-[200px] md:h-[100px] rounded-full bg-[#feeaed] flex items-center justify-center">
        <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px]">
          <Image src={icon} alt={alt} fill className="object-contain" />
        </div>
      </div>
      <h2 className="font-satoshi mt-4 md:mt-8 text-[20px] md:text-[24px] font-bold text-[#e42433] leading-[26px] md:leading-[30px]">
        {title}
      </h2>
      <p className="font-satoshi mt-3 md:mt-4 text-[14px] md:text-[16px] text-[#3f4648] leading-[22px] md:leading-[26px] max-w-[260px]">
        {description}
      </p>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="font-satoshi mt-6 md:mt-8 inline-flex items-center justify-center h-[42px] md:h-[46px] px-6 md:px-8 rounded-full bg-[#e42433] text-white text-[15px] md:text-[17.6px] font-extrabold hover:bg-[#c01f2d] transition-colors"
      >
        {label}
      </a>
    </div>
  );
}
