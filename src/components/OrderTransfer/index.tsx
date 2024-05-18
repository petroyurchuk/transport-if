import React from "react";
import { Form, Title } from "@/components";

type OrderTransferProps = {};

const OrderTransfer: React.FC<OrderTransferProps> = () => {
  return (
    <div id="transferOrder" className="py-20 h-[500px]">
      <Title tag="h3" styles="font-bold text-xl text-white text-center mb-5">
        Замовити трансфер
      </Title>
      <Form />
    </div>
  );
};
export default OrderTransfer;
