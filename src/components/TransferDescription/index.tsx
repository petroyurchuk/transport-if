import React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components";
import { CardListT } from "@/@types/card";

type TransferDescriptionProps = {
  title: string;
  body: string;
  list: CardListT[];
};

const TransferDescription: React.FC<TransferDescriptionProps> = ({
  title,
  body,
  list,
}) => {
  const t = useTranslations("Card");
  const mutatedList = list.map((item) => ({
    ...item,
    value: t(item.value),
  }));
  return (
    <section className="w-full flex justify-center items-center min-h-screen ">
      <Card
        body={t(body)}
        title={t(title)}
        list={mutatedList}
        buttonValue={t("button")}
      />
    </section>
  );
};
export default TransferDescription;
