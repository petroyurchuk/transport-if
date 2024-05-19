import { Title, Stage } from "@/components";
import { stages } from "@/data/stage";

const Stages: React.FC = () => {
  return (
    <div className="max-w-[90%] w-full m-auto mb-10">
      <Title tag="h4" styles="font-bold text-3xl text-white mb-5">
        Етапи роботи
      </Title>
      <div className="flex gap-[50px]">
        {stages.map(({ id, title, description }) => (
          <Stage key={id} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};
export default Stages;
