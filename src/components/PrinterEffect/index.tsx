import React from "react";

type PrinterEffectProps = {
  originalText: string;
};
const PrinterEffect: React.FC<PrinterEffectProps> = ({ originalText }) => {
  return (
    <p className="animate-printer text-lg  md:text-2xl  md:tracking-widest overflow-hidden md:whitespace-nowrap max-w-[80%]">
      {originalText}
    </p>
  );
};
export default PrinterEffect;
