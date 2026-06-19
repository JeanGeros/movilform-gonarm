import Image from "next/image";
import SlideIn from "./SlideIn";

export default function FeatureSection({
  title,
  imageSrc,
  imageAlt,
  imagePosition = "right",
  imageShadow = false,
  imageContain = false,
  children,
}: {
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  imageShadow?: boolean;
  imageContain?: boolean;
  children: React.ReactNode;
}) {
  const imageBlock = (
    <div
      className={`rounded-[15px] overflow-hidden ${
        imageShadow
          ? imagePosition === "left"
            ? "shadow-[-10px_10px_20px_rgba(0,0,0,0.25)]"
            : "shadow-[10px_10px_20px_rgba(0,0,0,0.25)]"
          : ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={400}
        className={`w-full h-full ${imageContain ? "object-contain" : "object-cover"}`}
      />
    </div>
  );

  const textBlock = (
    <div>
      <h2 className="font-satoshi text-[28px] text-center md:text-start md:text-[40px] font-extrabold text-[#192437] leading-[34px] md:leading-[46px]">
        {title}
      </h2>
      <div className="font-satoshi text-justify mt-5 md:mt-8 text-[15px] md:text-[17.6px] text-[#232321] leading-[24px] md:leading-[26px] space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <SlideIn>
      <section className="bg-white rounded-[20px] px-6 py-8 md:px-[70px] md:py-[40px]">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${imagePosition === "left" ? "md:grid-cols-[9fr_11fr]" : "md:grid-cols-[11fr_9fr]"}`}>
          <div className={`order-2 ${imagePosition === "left" ? "md:order-1" : "md:order-2"}`}>{imageBlock}</div>
          <div className={`order-1 ${imagePosition === "left" ? "md:order-2" : "md:order-1"}`}>{textBlock}</div>
        </div>
      </section>
    </SlideIn>
  );
}
