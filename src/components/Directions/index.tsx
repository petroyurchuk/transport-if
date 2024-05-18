import { directions } from "@/data/directions";
import { Direction } from "@/components";

const Directions: React.FC = () => {
  return (
    <div className="flex gap-5 w-full justify-center ">
      {directions.map(({ id, value }) => (
        <Direction key={id} direction={value} />
      ))}
    </div>
  );
};
export default Directions;
