"use client";
import Image from "next/image";

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
      onClick={() => window.scrollTo(0, 0)}
    />
  );
};
export default Logo;
