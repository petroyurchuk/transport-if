"use client";

import { Link as ScrollLink } from "react-scroll";
import { dataListT } from "@/@types/navigation";

type NavigationItemProps = Omit<dataListT, "id">;

const NavigationItem: React.FC<NavigationItemProps> = ({ value, linkTo }) => {
  return (
    <li className="cursor-pointer font-semibold tracking-widest">
      <ScrollLink smooth to={linkTo}>
        {value}
      </ScrollLink>
    </li>
  );
};
export default NavigationItem;
