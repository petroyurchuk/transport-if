import { BillBoard, TransferDescription } from "@/components";
import { cardData } from "@/data/card";

export default function Home() {
  return (
    <main className="min-h-screen min-w-full overflow-hidden ">
      <BillBoard />
      <div className="bg-black/90">
        {cardData.map((cardItem) => (
          <TransferDescription
            key={cardItem.id}
            title={cardItem.title}
            body={cardItem.body}
            list={cardItem.list}
          />
        ))}
      </div>
    </main>
  );
}
