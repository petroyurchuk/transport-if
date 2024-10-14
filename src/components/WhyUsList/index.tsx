import React from "react";
// import { useTranslations } from "next-intl";
import { Title, WhyUsItem } from "@/components";
import { whyUsList } from "@/data/whyus";

type WhyUsListProps = {
  messages: Record<string, any>;
};
const WhyUsList: React.FC<WhyUsListProps> = ({ messages }) => {
  // const t = useTranslations("WhyUs");

  return (
    <div id="whyUs" className="max-w-[90%] w-full m-auto mb-10 ">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        {
          messages.mainTitle
          // t("mainTitle")
        }
      </Title>
      <div className="flex justify-center md:justify-normal gap-[25px] flex-wrap">
        {whyUsList.map(({ id, title }) => (
          <WhyUsItem
            key={id}
            title={
              messages[title]
              // t(title)
            }
            description={
              messages[id]
              // t(id)
            }
          />
        ))}
      </div>
    </div>
  );
};
export default WhyUsList;
