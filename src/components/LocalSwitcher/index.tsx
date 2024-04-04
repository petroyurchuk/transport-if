"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { selectorData } from "@/data/navigation";

const LocalSwitcher: React.FC = () => {
  const router = useRouter();
  const localActive = useLocale();
  const [buttonValue, setButtonValue] = React.useState(localActive);
  const [isOpen, setIsOpen] = React.useState(false);

  const changeLanguage = (value: string) => {
    setButtonValue(value);
    router.replace(`/${value}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="text-lg font-bold uppercase outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonValue === "uk" ? "ua" : buttonValue}
      </button>

      {isOpen && (
        <div className="absolute mt-[1px] left-[-10px] bg-slate-900/40 w-[45px] rounded-md  shadow-sm shadow-white">
          {selectorData.map((selector) => (
            <div
              key={selector.id}
              onClick={() => changeLanguage(selector.value)}
              className="w-full text-center cursor-pointer transition-all duration-100 rounded-md hover:bg-gray-950/70 hover:text-purple-400 uppercase"
            >
              {selector.value === "uk" ? "ua" : selector.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default LocalSwitcher;
