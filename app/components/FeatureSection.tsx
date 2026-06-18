import Image from "next/image";

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
      <h2 className="font-satoshi text-[40px] font-extrabold text-[#192437] leading-[46px]">
        {title}
      </h2>
      <div className="font-satoshi text-justify mt-8 text-[17.6px] text-[#232321] leading-[26px] space-y-4">
        {children}
      </div>
    </div>
  );

  return (
    <section className="bg-white rounded-[20px] px-[70px] py-[40px]">
      <div className={`grid gap-12 items-center ${imagePosition === "left" ? "grid-cols-[9fr_11fr]" : "grid-cols-[11fr_9fr]"}`}>
        {imagePosition === "left" ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  );
}
