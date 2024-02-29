import React from "react";
import { PrinterEffect } from "..";
import { useTranslations } from "next-intl";
import Title from "../Title";

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
      <div className="absolute top-[45%] left-[1%] md:left-[10%]   text-white text-[2.3rem] ">
        <Title
          tag="h1"
          styles="text-2xl  md:text-4xl lg:text-8xl font-bold tracking-widest uppercase"
        >
          Transport IF
        </Title>
        <PrinterEffect originalText={t("originalText")} />
      </div>
    </div>
  );
};

export default BillBoard;
