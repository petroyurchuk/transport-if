import { listPriceT, listPricesT } from "@/@types/listPrice";

const listPrice: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "12 000 грн",
  },
];

const listPrice2: listPriceT[] = [
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
const listPrice3: listPriceT[] = [
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
const listPrice4: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "9 900 грн",
  },
];
const listPrice5: listPriceT[] = [
  {
    id: "1",
    quantity: "за особу",
    generalPrice: "800 грн./особа",
  },
  {
    id: "2",
    quantity: "діти від 6 до 14 років",
    generalPrice: "700 грн./особа",
  },
];
const listPrice6: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "6 900 грн./похід",
  },
  {
    id: "2",
    quantity: "від 8 до 16 осіб",
    generalPrice: "8 900 грн./похід",
  },
  {
    id: "3",
    quantity: "більше 16 осіб ",
    generalPrice: "прораховується персонально",
  },
];
const listPrice7: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "6 700 грн",
  },
];
const listPrice8: listPriceT[] = [
  {
    id: "1",
    quantity: "6-7 осіб",
    generalPrice: "3 200 грн",
  },
  {
    id: "2",
    quantity: "Важливо! Цінова політика, може змінюватись.",
    generalPrice:
      "Тому пишіть на Viber або телефонуйте Ми надамо детальну інформацію! ",
  },
];
const listPrice9: listPriceT[] = [
  {
    id: "1",
    quantity: "до 5 осіб",
    generalPrice: "12 500 грн",
  },
];
const listPrice10: listPriceT[] = [
  {
    id: "1",
    quantity: "дорослі",
    generalPrice: "900 грн./особа",
  },
  {
    id: "2",
    quantity: "діти від 6 до 14 років",
    generalPrice: "800 грн./особа",
  },
];
const listPrice11: listPriceT[] = [
  {
    id: "1",
    quantity: "до 8 осіб",
    generalPrice: "7 500 грн./похід",
  },
  {
    id: "2",
    quantity: "від 8 до 16 осіб",
    generalPrice: "9 500 грн./похід",
  },
  {
    id: "3",
    quantity: "більше 16 осіб ",
    generalPrice: "прораховується персонально",
  },
];

export const listPrices: listPricesT = {
  "1": [listPrice, listPrice2, listPrice3],
  "2": [listPrice4, listPrice5, listPrice6],
  "3": [listPrice7, listPrice8],
  "4": [listPrice9, listPrice10, listPrice11],
  "5": [listPrice5],
};
