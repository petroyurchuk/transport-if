import { TravelT } from "@/@types/travel";
import { ListPrice, Title } from "@/components";

type TravelDescriptionProps = {
  travel: TravelT;
};
const TravelDescription: React.FC<TravelDescriptionProps> = ({ travel }) => {
  return (
    <div className="pb-10">
      <Title
        tag="h1"
        styles="text-4xl font-bold text-slate-900 text-center py-5"
      >
        {travel.travelTitle}
      </Title>

      <div className="mb-5">
        <h3 className="text-2xl font-bold text-slate-900">
          Таймінг одноденного туру:
        </h3>
        {travel.travelPlan.map(({ id, time, description }) => (
          <p key={id} className="text-lg">
            <span className="font-bold">{time} - </span>
            {description}
          </p>
        ))}
      </div>
      <ListPrice />
    </div>
  );
};
export default TravelDescription;
