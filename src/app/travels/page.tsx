import { Metadata } from "next";
import { Directions, Travels } from "@/components/";

export const metadata: Metadata = {
  title: "Travels directions",
};

const TravelsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-full max-h-[500px]  h-full"></div>
      <Directions />
      <Travels />
    </div>
  );
};
export default TravelsPage;
