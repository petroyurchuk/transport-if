import { Metadata } from "next";
import { Directions, FilterTypes, Travels } from "@/components/";

export const metadata: Metadata = {
  title: "Travels directions",
};

export default function TravelsPage() {
  return (
    <div className="flex flex-col">
      {/* <Directions /> */}
      <FilterTypes />
      <Travels />
    </div>
  );
}
