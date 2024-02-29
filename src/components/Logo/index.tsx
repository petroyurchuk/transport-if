"use client";
import Image from "next/image";
import { animateScroll } from "react-scroll";

type LogoProps = {
  logoImage: string;
};

const Logo: React.FC<LogoProps> = ({ logoImage }) => {
  return (
    <Image
      className="rounded-full cursor-pointer"
      width={75}
      height={75}
      src={logoImage}
      alt="logo"
      onClick={() => {
        animateScroll.scrollToTop({
          smooth: true,
          duration: 500,
        });
      }}
    />
  );
};
export default Logo;
