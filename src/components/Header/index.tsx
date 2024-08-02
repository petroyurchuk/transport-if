import { navigationData } from "@/data/navigation";
import {
  LocalSwitcher,
  Logo,
  MobileNavigationList,
  NavigationList,
} from "@/components";
import { useTranslations } from "next-intl";

const Header: React.FC = () => {
  const t = useTranslations("Header");
  const mutatedNavigationData = navigationData.map((item) => ({
    ...item,
    value: t(item.value),
  }));
  return (
    <header className="w-full fixed text-white flex justify-center items-center min-h-16 gap-10 z-10">
      <Logo logoImage="/images/logo.png" />
      <NavigationList dataList={mutatedNavigationData} />
      <LocalSwitcher />
      <MobileNavigationList dataList={mutatedNavigationData} />
    </header>
  );
};
export default Header;
