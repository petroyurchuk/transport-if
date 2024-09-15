import { TravelT } from "@/@types/travel";
import { listPrices } from "./listPrice";
import { images } from "./galleryCarousel";

export const travels: TravelT[] = [
  {
    id: "1",
    direction: "Bukovel",
    travelTitle: "Сходження на гору Шпиці",
    travelImage: "/images/spikes/1.jpg",
    description:
      "Назва “Шпиці” влучно передає атмосферу цієї гори. Її природні кам’яні насипи нагадують величезні вежі. Розташовані на висоті понад 1800 метрів, вони вражають своєю величчю та створюють цілі кам’яні коридори. Кожна брила досягає 40 метрів у висоту.",
    listPrices,
    listPricesTitles: [
      "Вартість із VIP обслуговуванням (всі деталі по телефону)",
      "Вартість походу при долученні до групи (гід+транспорт)",
      "Вартість індивідуального походу (гід+транспорт)",
    ],
    images,
  },
  {
    id: "2",
    direction: "Bukovel",
    travelTitle: "Сходження на гору Піп-іван",
    travelImage: "/images/pip-ivan/1.jpg",
    description: `Назва "Піп Іван" вдало відображає велич та загадковість цієї гори. Її вершина, що здіймається на висоту понад 2000 метрів, домінує над навколишнім ландшафтом. На самій вершині розташовані руїни старовинної обсерваторії, які додають горі особливої атмосфери. Ці кам'яні стіни, що витримали випробування часом і природою, нагадують про колишню велич та роблять Піп Іван одним із найвідоміших і найзагадковіших місць Карпат.`,
    listPrices,
    listPricesTitles: [
      "Вартість із VIP обслуговуванням (всі деталі по телефону)",
      "Вартість походу при долученні до групи (гід+транспорт)",
      "Вартість індивідуального походу (гід+транспорт)",
    ],
    images,
  },
  {
    id: "3",
    direction: "Bukovel",
    travelTitle: "Похід на гору Говерла",
    travelImage: "/images/benjola/1.jpg",
    description: `У селі Бережниця, на захоплюючій висоті, встановлена ВЕЛИЧЕЗНА гуцульська гойдалка — чи знали ви про це? Під час нашого нового джип-туру позашляховики доставлять вас до цієї нової гірської Великої Гуцульської Гойдалки. Вона не залишить байдужим нікого: ні тих, хто любить екстрим, ні тих, хто боїться висоти. Ви самі обираєте, наскільки високо злетіти над землею. Якщо ви вважаєте, що гойдалки — це лише для дітей, спробуйте самі, і ви отримаєте незабутні враження! А дітям це точно сподобається.

До того ж, на шляху вгору ви зможете милуватися чудовими пейзажами через вікна комфортного джипа.`,
    listPrices,
    listPricesTitles: [
      "Вартість із VIP обслуговуванням (всі деталі по телефону)",
      "Вартість поїздки до Великої гойдалки на позашляховиках:",
      "Вартість індивідуального походу (гід+транспорт)",
    ],
    images,
  },
  {
    id: "4",
    direction: "Bukovel",
    travelTitle: "Похід на гору Говерла",
    travelImage: "/images/hoverla/1.jpg",
    description: `Це найвища гора України. Це, без сумніву, одна з найвідоміших гір країни. Тут варто побувати кожному українцю. Ми запрошуємо вас підкорити цей величний оглядовий майданчик Карпат.

До того ж, на шляху вгору ви зможете милуватися чудовими пейзажами через вікна комфортного джипа.`,
    listPrices,
    listPricesTitles: [
      "Вартість із VIP обслуговуванням (всі деталі по телефону)",
      "Вартість поїздки до Великої гойдалки на позашляховиках:",
      "Вартість індивідуального походу (гід+транспорт)",
    ],
    images,
  },
  {
    id: "5",
    direction: "Bukovel",
    travelTitle: "ЕКСКУРСІЯ до водоспаду Женецький Гук —Татарів",
    travelImage: "/images/waterfall-huk/1.jpg",
    description: `Вирушайте на екскурсію до водоспаду Женецький Гук — однієї з наймальовничіших природних пам'яток Карпат, розташованої неподалік села Татарів. Це місце зачаровує своєю дикою красою: гірські води стрімко падають з висоти близько 15 метрів, створюючи захопливе видовище та мелодійний шум. Дорогою до водоспаду ви матимете можливість насолодитися чистим гірським повітрям, розкішними карпатськими лісами та неймовірними краєвидами. Це ідеальний тур для тих, хто шукає релаксацію та хоче відчути велич природи.`,
    listPrices,
    listPricesTitles: [
      "Вартість із VIP обслуговуванням (всі деталі по телефону)",
      "Вартість поїздки до Великої гойдалки на позашляховиках:",
      "Вартість індивідуального походу (гід+транспорт)",
    ],
    images,
  },
];
