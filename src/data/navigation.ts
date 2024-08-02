import { dataListT, selectorDataT } from "@/@types/navigation";

export const navigationData: dataListT[] = [
  {
    id: 1,
    value: "transfers",
    linkTo: "transfer",
  },
  {
    id: 2,
    value: "avtopark",
    linkTo: "avtopark",
  },
  {
    id: 3,
    value: "whyUs",
    linkTo: "whyUs",
  },
  {
    id: 4,
    value: "travels",
    linkTo: "/travels",
  },
];

export const selectorData: selectorDataT[] = [
  {
    id: 1,
    value: "uk",
  },
  {
    id: 2,
    value: "en",
  },
];
