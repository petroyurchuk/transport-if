import React from "react";
import { Button, PrinterEffect, Title } from "@/components";
import { useTranslations } from "next-intl";
import Link from "next/link";

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
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
        />
      </div>
      <div className="absolute top-[45%] left-[2%] md:left-[10%]   text-white text-[2.3rem] space-y-5 ">
        <Title tag="h1" styles={"main-title"}>
          Transport IF
        </Title>
        <PrinterEffect originalText={t("originalText")} />
        <Button pathScroll="transfer">{t("button")}</Button>
        <PrinterEffect originalText={t("tourQuestion")} />
        <Link
          className={`text-lg px-4 py-2  flex justify-center items-center bg-gradient-to-b from-pink-600 to-pink-400 min-w-[200px] md:text-xl uppercase font-semibold tracking-widest rounded-xl cursor-pointer transition-all duration-150 hover:bg-gradient-to-t hover:tracking-[2px] outline-none max-w-[400px] `}
          href={"/travels"}
        >
          {t("linkTour")}
        </Link>
      </div>
    </div>
  );
};

export default BillBoard;
