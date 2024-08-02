import { useTranslations } from "next-intl";
import { Title, WhyUsItem } from "@/components";
import { whyUsList } from "@/data/whyus";

type Props = {};
const WhyUsList = (props: Props) => {
  const t = useTranslations("WhyUs");
  return (
    <div id="whyUs" className="max-w-[90%] w-full m-auto mb-10 ">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        {t("mainTitle")}
      </Title>
      <div className="flex justify-center md:justify-normal gap-[25px] flex-wrap">
        {whyUsList.map(({ id, title }) => (
          <WhyUsItem key={id} title={t(title)} description={t(id)} />
        ))}
      </div>
    </div>
  );
};
export default WhyUsList;
