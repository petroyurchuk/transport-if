import { CardListT } from "@/@types/card";

type AdditionalInformationProps = {
  list: CardListT[];
};
const AdditionalInformation: React.FC<AdditionalInformationProps> = ({
  list,
}) => {
  return (
    <ul className="w-full">
      {list.map((item) => (
        <li className="w-full flex gap-4 mb-2 items-center" key={item.id}>
          <span className="flex items-center justify-center size-14 shrink-0 bg-gradient-to-r from-red-400 to-purple-600 text-white text-lg font-bold rounded-full">
            {item.id}
          </span>
          <div className="text-lg text-white grow-1 font-semibold text-left">
            {item.value}
          </div>
        </li>
      ))}
    </ul>
  );
};
export default AdditionalInformation;
