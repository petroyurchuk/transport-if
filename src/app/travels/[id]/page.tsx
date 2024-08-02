import { Metadata } from "next";
import { travels } from "@/data/travels";
import {
  SidebarInfo,
  TravelDescription,
  ContactButton,
  GalleryCarousel,
} from "@/components";
import { images } from "@/data/galleryCarousel";

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
      <div className="max-w-[1200px] m-auto flex">
        <div className="max-w-[1000px]">
          <GalleryCarousel images={images} />
          <div className="flex  justify-center gap-5 px-2">
            <ContactButton
              bgColor="bg-[#25D366]"
              link="https://wa.me/380684792078"
            >
              Написати у WhatsApp
            </ContactButton>
            <ContactButton bgColor="bg-sky-600" link="https://t.me/petro_y">
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
