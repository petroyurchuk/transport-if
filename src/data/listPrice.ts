import { listPriceT } from "@/@types/listPrice";

export const listPrice: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "12 000 грн",
  },
];

export const listPrice2: listPriceT[] = [
  {
    id: "1",
    quantity: "за 1 особу",
    generalPrice: "900 грн",
  },
  {
    id: "2",
    quantity: "діти з 6 до 14 років",
    generalPrice: "900 грн./особу",
  },
];

export const listPrice3: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "7000 грн",
  },
  {
    id: "2",
    quantity: "від 9 до 16 осіб",
    generalPrice: "9000 грн.",
  },
  {
    id: "3",
    quantity: "більше 16 осіб",
    generalPrice: "прораховується персонально",
  },
];
