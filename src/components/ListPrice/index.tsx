import React from "react";
import { Title } from "@/components";
import { listPrice } from "@/data/listPrice";

type ListPriceProps = {};
const ListPrice: React.FC<ListPriceProps> = () => {
  return (
    <div className="w-full">
      <Title tag="h3" styles="font-bold text-xl text-purple-900 mb-1">
        Вартість одноденного туру:
      </Title>
      <table className="border-2 border-purple-200 w-full">
        <tr>
          <th className="text-white bg-purple-700  py-1 border-[1px] border-l-0">
            Кількість осіб
          </th>
          <th className="text-white bg-purple-700  py-1 border-[1px] border-r-0">
            Загальна вартість туру
          </th>
        </tr>
        {listPrice.map(({ id, quantity, generalPrice }) => (
          <tr className="border-[1px]" key={id}>
            <td className="border-[1px] text-center">{quantity}</td>
            <td className="text-center">{generalPrice}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default ListPrice;
