"use client";

import React from "react";

type PrinterEffectProps = {
  originalText: string;
  delay: number;
};
const PrinterEffect: React.FC<PrinterEffectProps> = ({
  originalText,
  delay,
}) => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < originalText.length) {
        setText((prevText) => prevText + originalText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [delay, originalText]);

  return <span className="animate-typing text-4xl ">{text}</span>;
};
export default PrinterEffect;
