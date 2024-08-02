import React from "react";
import { Form, Title } from "@/components";
import { useTranslations } from "next-intl";

type OrderTransferProps = {};

const OrderTransfer: React.FC<OrderTransferProps> = () => {
  const t = useTranslations("Form");
  return (
    <div id="transfer" className="py-20 h-auto">
      <Title tag="h3" styles="font-bold text-xl text-white text-center mb-5">
        {t("title")}
      </Title>
      <Form
        buttonValue={t("button")}
        subtitle={t("subtitle")}
        selectTitle={t("selectTitle")}
        selectFirst={t("selectFirst")}
        selectSecond={t("selectSecond")}
        nameErrorMessage={t("errorName")}
        phoneErrorMessage={t("errorPhone")}
      />
    </div>
  );
};
export default OrderTransfer;
