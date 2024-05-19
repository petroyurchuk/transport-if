import { DetailInfoT } from "@/@types/detail";

export const detailInfo: DetailInfoT[] = [
  {
    id: "1",
    mainTitle: "У ВАРТІСТЬ ВХОДИТЬ | У ВАРТІСТЬ НЕ ВХОДИТЬ",
    typeOfList: "disc",
    list: [
      {
        id: "1",
        title: "У вартість входить:",
        items: [
          "організаторські послуги",
          "катання на позашляховика",
          "катання на квадроциклах",
          "комплексний обід",
          "дегустація на полонині",
          "послуги інструкторів",
          "послуги водія-екскурсовода",
        ],
      },
      {
        id: "2",
        title: "У вартість не входить:",
        items: [
          "відео та фотозйомка",
          "покупки під час туру",
          "особливі побажання",
          "трансфер від вашого закладу до початку туру (за додаткову оплату)",
        ],
      },
    ],
  },
  {
    id: "2",
    mainTitle: "ФОРМАТ ОДЯГУ",
    typeOfList: "disc",
    list: [
      {
        id: "1",
        items: [
          "спортивний (зручний) одяг",
          "взуття закритого типу без каблуків =)",
        ],
      },
    ],
  },
  {
    id: "3",
    mainTitle: "ЯК ВСЕ ВІДБУВАЄТЬСЯ ?",
    typeOfList: "decimal",
    list: [
      {
        id: "1",
        items: [
          "Ви телефонуєте чи пишите нам про ваше бажання взяти участь у турі, ми надаємо вам детальну інформацію",
          "Бронюєте тур та вносите передоплату",
          "У день ТУРУ зустрічаємось в узгодженому місці",
          "Початок ТУРУ",
          "По завершенні туру повертаємо Вас до місця зустрічі",
          "Повна оплата",
          "Обмін враженнями",
        ],
      },
    ],
  },
];