export type TravelT = {
  id: string;
  travelTitle: string;
  travelImage: string;
  travelPlan: TravelPlanT[];
};

type TravelPlanT = {
  id: string;
  time: string;
  description: string;
};
