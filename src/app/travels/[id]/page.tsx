import { TravelDescription } from "@/components";
import ContactButton from "@/components/ContactButton";
import GalleryCarousel from "@/components/GalleryCarousel";
import { travels } from "@/data/travels";
import { Metadata } from "next";

type TravelPageProps = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: TravelPageProps): Promise<Metadata> {
  const id = params.id;
  const currentTravel = travels.filter((travel) => travel.id === id);
  return {
    title: currentTravel[0].travelTitle,
  };
}

const TravelPage: React.FC<TravelPageProps> = ({ params }) => {
  const travel = travels.filter((travel) => travel.id === params.id)[0];
  return (
    <div className="max-w-[1200px] m-auto">
      TravelPage {params.id}
      <div className="max-w-[1000px]">
        <GalleryCarousel />
        <div className="flex  justify-center gap-5 px-2">
          <ContactButton bgColor="bg-purple-600">
            Написати у Viber
          </ContactButton>
          <ContactButton bgColor="bg-sky-600">
            Написати у Telegram
          </ContactButton>
        </div>
        <TravelDescription travel={travel} />
      </div>
    </div>
  );
};
export default TravelPage;
