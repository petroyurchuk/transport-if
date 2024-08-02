import {
  BillBoard,
  Carousel,
  OrderTransfer,
  Stages,
  TransferDescription,
  WhyUsList,
} from "@/components";
import { cardData } from "@/data/card";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full overflow-hidden ">
      <BillBoard />
      <div>
        {cardData.map((cardItem) => (
          <TransferDescription
            key={cardItem.id}
            title={cardItem.title}
            body={cardItem.body}
            list={cardItem.list}
          />
        ))}
        <Carousel />
        <OrderTransfer />
        <Stages />
        <WhyUsList />
      </div>
    </main>
  );
}
