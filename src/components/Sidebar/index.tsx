import { FaTelegram, FaWhatsapp } from "react-icons/fa";

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <div className="fixed z-[100] top-[50%]  left-[-190px] h-[250px] max-w-[250px] w-full flex flex-col gap-3">
      <a
        href="https://t.me/vova3s"
        target="_blank"
        className="transition-all duration-300 hover:translate-x-[100px] flex items-center justify-end bg-slate-950 rounded-md px-5 py-2 "
      >
        <span className="mr-[10px] font-bold text-white">Telegram</span>
        <FaTelegram fill="#fff" fontSize={30} />
      </a>
      <a
        href="https://wa.me/380684792078"
        target="_blank"
        className="transition-all duration-300 hover:translate-x-[100px] flex items-center justify-end bg-slate-950 rounded-md px-5 py-2"
      >
        <span className="mr-[10px] font-bold text-white">WhatsApp</span>
        <FaWhatsapp fill="#fff" fontSize={30} />
      </a>
    </div>
  );
};
export default Sidebar;
