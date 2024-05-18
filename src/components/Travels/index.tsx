import { travels } from "@/data/travels";
import { Travel } from "..";

const Travels: React.FC = () => {
  return (
    <div className="w-full px-10">
      {travels.map(({ id, travelTitle, travelImage }) => (
        <Travel
          key={id}
          id={id}
          travelTitle={travelTitle}
          travelImage={travelImage}
        />
      ))}
    </div>
  );
};
export default Travels;
