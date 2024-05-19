import { Logo } from "@/components";

const Footer: React.FC = () => {
  return (
    <div className="w-full border-t-[1px] border-purple-200 pt-10">
      <div className="max-w-[1200px] m-auto text-white flex  justify-between items-center">
        <div>
          <Logo logoImage="/images/logo.png" />
        </div>
        <div className="font-semibold">
          <a className="hover:underline" href="tel:+380 68 479 20 78">
            +38 (068) 479 20 78
          </a>
          <p>Обробка запитів, щоденно з 08:00-22:00</p>
        </div>
        <div>telegram viber</div>
        <a
          className="hover:underline font-semibold"
          href="mailto:petroyurchuk66@gmail.com"
        >
          petroyurchuk66@gmail.com
        </a>
      </div>
    </div>
  );
};
export default Footer;
