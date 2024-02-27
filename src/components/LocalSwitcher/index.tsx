"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const LocalSwitcher: React.FC = () => {
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    router.replace(`/${e.target.value}`);
  };

  return (
    <select
      defaultValue={localActive}
      className="outline-none border-0 cursor-pointer rounded-full drop-shadow-md bg-transparent  duration-300 hover:bg-black/10 focus:bg-black/20"
      onChange={onSelectChange}
    >
      <option value="uk">Ua</option>
      <option value="en">En</option>
    </select>
  );
};
export default LocalSwitcher;
