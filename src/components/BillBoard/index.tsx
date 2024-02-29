import React from "react";
import { Button, PrinterEffect, Title } from "@/components";
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
      <div className="absolute top-[45%] left-[1%] md:left-[10%]   text-white text-[2.3rem] space-y-5 ">
        <Title
          tag="h1"
          styles="text-2xl  md:text-4xl lg:text-8xl font-bold tracking-widest uppercase"
        >
          Transport IF
        </Title>
        <PrinterEffect originalText={t("originalText")} />
        <Button pathScroll="transferOrder">Замовити трансфер</Button>
      </div>
    </div>
  );
};

export default BillBoard;
