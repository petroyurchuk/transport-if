"use client";

import { useAppSelector } from "@/store/hooks";
import { Travel } from "@/components";
import { travels } from "@/data/travels";

const Travels: React.FC = () => {
  const { direction } = useAppSelector((state) => state.direction);

  return (
    <div className="w-full px-10">
      {travels
        .filter((travel) => travel.direction === direction)
        .map(({ id, travelTitle, travelImage }) => (
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
