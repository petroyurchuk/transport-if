import React from "react";
import { useTranslations } from "next-intl";
import { Card } from "@/components";
import { CardListT } from "@/@types/card";

type TransferDescriptionProps = {
  title: string;
  body: string;
  list: CardListT[];
  messages: Record<string, any>;
};

const TransferDescription: React.FC<TransferDescriptionProps> = ({
  title,
  body,
  list,
  messages,
}) => {
  // const t = useTranslations("Card");
  const mutatedList = list.map((item) => ({
    ...item,
    value: messages[item.value],
  }));
  return (
    <section className="w-full flex justify-center items-center min-h-screen ">
      <Card
        body={messages?.body}
        title={messages?.title}
        list={mutatedList}
        buttonValue={messages?.button}
      />
    </section>
  );
};
export default TransferDescription;
