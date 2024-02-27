import { dataListT } from "@/@types/navigation";
import { NavigationItem } from "@/components";
import { useTranslations } from "next-intl";

type NavigationListProps = {
  dataList: dataListT[];
};

const NavigationList: React.FC<NavigationListProps> = ({ dataList }) => {
  const t = useTranslations("Header");
  return (
    <nav>
      <ul className="flex justify-center gap-5">
        {dataList.map(({ id, value, linkTo }) => (
          <NavigationItem key={id} value={t(value)} linkTo={linkTo} />
        ))}
      </ul>
    </nav>
  );
};
export default NavigationList;
