import { dataListT } from "@/@types/navigation";
import { Logo, NavigationItem } from "@/components";

type NavigationListProps = {
  dataList: dataListT[];
};
const NavigationList: React.FC<NavigationListProps> = ({ dataList }) => {
  return (
    <nav>
      <ul className="flex justify-center gap-5">
        {dataList.map(({ id, value, linkTo }) => (
          <NavigationItem key={id} value={value} linkTo={linkTo} />
        ))}
      </ul>
    </nav>
  );
};
export default NavigationList;
