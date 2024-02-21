import { navigationData } from "@/data/navigation";
import { Logo, NavigationList } from "@/components";

const Header: React.FC = () => {
  return (
    <header className="w-full fixed text-white flex justify-center items-center min-h-16 gap-10 z-10">
      <Logo logoImage="/images/logo.svg" />
      <NavigationList dataList={navigationData} />
    </header>
  );
};
export default Header;
