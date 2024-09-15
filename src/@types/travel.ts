import { imagesT } from "./gallery";
import { listPricesT } from "./listPrice";

export type TravelT = {
  id: string;
  direction: string;
  travelTitle: string;
  travelImage: string;
  description: string;
  listPrices: listPricesT;
  listPricesTitles: string[];
  images: imagesT;
};

// type TravelPlanT = {
//   id: string;
//   time: string;
//   description: string;
// };
