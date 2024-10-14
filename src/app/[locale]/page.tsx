import {
  BillBoard,
  Carousel,
  OrderTransfer,
  Stages,
  TransferDescription,
  WhyUsList,
} from "@/components";
import { cardData } from "@/data/card";
import { locales } from "@/i18n";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  locale: string;
}

type Messages = {
  BillBoard?: Record<string, string>;
  Card?: Record<string, string>;
  Form?: Record<string, string>;
  Stage?: Record<string, string>;
  WhyUs?: Record<string, string>;
};

type HomeProps = {
  params: Params;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function Home({ params }: HomeProps) {
  const fs = require("fs");
  const path = require("path");

  const localePath = path.resolve(
    process.cwd(),
    `../../../messages/${params.locale}.json`
  );

  // Перевірка наявності файлу перед читанням
  let parsed: Messages = {};
  if (fs.existsSync(localePath)) {
    try {
      const fileContent = fs.readFileSync(localePath, "utf8");
      parsed = JSON.parse(fileContent);
    } catch (error) {
      console.error("Error parsing JSON file:", error);
    }
  }
  return (
    <main className="min-h-screen min-w-full overflow-hidden">
      <BillBoard messages={parsed.BillBoard || {}} />
      <div>
        {cardData.map((cardItem) => (
          <TransferDescription
            messages={parsed.Card || {}}
            key={cardItem.id}
            title={cardItem.title}
            body={cardItem.body}
            list={cardItem.list}
          />
        ))}
        <Carousel />
        <OrderTransfer messages={parsed.Form || {}} />
        <Stages messages={parsed.Stage || {}} />
        <WhyUsList messages={parsed.WhyUs || {}} />
      </div>
    </main>
  );
}
