import { useTranslations } from "next-intl";
import { Title, Stage } from "@/components";
import { stages } from "@/data/stage";

const Stages: React.FC = () => {
  const t = useTranslations("Stage");

  return (
    <div className="max-w-[90%] w-full m-auto mb-10 ">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        {t("title")}
      </Title>
      <div className="flex justify-center md:justify-normal gap-[25px] flex-wrap">
        {stages.map(({ id, title }) => (
          <Stage key={id} title={title} description={t(id)} />
        ))}
      </div>
    </div>
  );
};
export default Stages;
