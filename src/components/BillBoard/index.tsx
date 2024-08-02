import React from "react";
import { Button, PrinterEffect, Title } from "@/components";
import { useTranslations } from "next-intl";

const BillBoard: React.FC = () => {
  const t = useTranslations("BillBoard");

  return (
    <div className="relative h-screen">
      <div className="w-full h-full absolute top-0">
        <video
          src={"/videos/example.mp4"}
          className="w-full h-full object-cover brightness-[60%] transition duration-500"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[45%] left-[1%] md:left-[10%]   text-white text-[2.3rem] space-y-5 ">
        <Title tag="h1" styles={"main-title"}>
          Transport IF
        </Title>
        <PrinterEffect originalText={t("originalText")} />
        <Button pathScroll="transfer">{t("button")}</Button>
      </div>
    </div>
  );
};

export default BillBoard;
