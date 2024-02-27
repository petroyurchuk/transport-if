import React from "react";
import { PrinterEffect } from "..";
import { useTranslations } from "next-intl";

const BillBoard: React.FC = () => {
  const t = useTranslations("BillBoard");
  return (
    <div>
      <div className="w-full h-screen absolute top-0">
        <video
          src={"/videos/example.mp4"}
          className="w-full h-full object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[45%] left-[10%] w-full lg:max-w-[60%] text-white text-[2.3rem]">
        <PrinterEffect delay={100} originalText={t("originalText")} />
      </div>
    </div>
  );
};

export default BillBoard;
