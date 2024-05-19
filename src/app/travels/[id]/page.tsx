import { Metadata } from "next";
import { travels } from "@/data/travels";
import {
  SidebarInfo,
  TravelDescription,
  ContactButton,
  GalleryCarousel,
} from "@/components";

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
    <div>
      <div className="w-full h-screen  relative z-0 mb-5 text-4xl flex justify-center items-center text-slate-950 animate-pulse">
        Travel for your friends
      </div>
      <div className="max-w-[1200px] m-auto flex">
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
        <div>
          <div className="ml-2 relative min-h-[1000px] z-50 ">
            <div className="sticky top-5">
              <SidebarInfo label="Контакти" inputValue="+380 68 20 11 720" />
              <SidebarInfo label="Адрес" inputValue="Туристична фірма" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TravelPage;
