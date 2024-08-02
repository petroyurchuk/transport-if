"use client";

import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { animateScroll } from "react-scroll";
import Link from "next/link";
import { useAppDispatch } from "@/store/hooks";
import { setSearch } from "@/store/search/slice";

const HeaderTravels: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const handleLogo = () => {
    router.push("/travels");
    animateScroll.scrollToTop({ smooth: true, duration: 500 });
  };
  return (
    <header className="w-full flex items-center min-h-[80px] max-h-[120px]  bg-black/90 shadow-md shadow-purple-600 mb-5">
      <Link
        href={"/"}
        className="px-4 py-2 bg-pink-500 rounded-md font-semibold text-white ml-5 transition-all duration-150  hover:tracking-wide"
      >
        Повернутися до трансферів
      </Link>
      <div className="max-w-[1200px] w-full  m-auto flex items-center">
        <div onClick={() => handleLogo()}>
          <Image
            src={"/images/logo_tourism_company.png"}
            width={60}
            height={60}
            alt="travels logo"
            className="cursor-pointer"
          />
        </div>
        {pathName.split("/").length > 2 ? null : (
          <input
            type="text"
            placeholder="Введіть назву туру..."
            className="w-full max-w-[300px] md:max-w-[550px] py-2 rounded-lg pl-4 m-auto outline-none bg-gray-700 text-white placeholder:text-white"
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        )}
      </div>
    </header>
  );
};
export default HeaderTravels;
