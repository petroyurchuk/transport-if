import React from "react";
import { Form, Title } from "@/components";
import { useTranslations } from "next-intl";

type OrderTransferProps = {
  messages: Record<string, any>;
};

const OrderTransfer: React.FC<OrderTransferProps> = ({ messages }) => {
  // const t = useTranslations("Form");
  return (
    <div id="transfer" className="py-20 h-auto">
      <Title tag="h3" styles="font-bold text-xl text-white text-center mb-5">
        {messages?.title}
      </Title>
      <Form
        buttonValue={
          // t("button")
          messages?.button
        }
        subtitle={
          messages?.subtitle
          // t("subtitle")
        }
        selectTitle={
          messages?.selectTitle
          // t("selectTitle")
        }
        selectFirst={
          messages?.selectFirst
          // t("selectFirst")
        }
        selectSecond={
          messages?.selectSecond
          // t("selectSecond")
        }
        nameErrorMessage={
          messages?.errorName
          // t("errorName")
        }
        phoneErrorMessage={
          messages?.errorPhone
          // t("errorPhone")
        }
      />
    </div>
  );
};
export default OrderTransfer;
