type ContactButtonProps = {
  children: React.ReactNode;
  bgColor: string;
};
const ContactButton: React.FC<ContactButtonProps> = ({ children, bgColor }) => {
  return (
    <button
      className={`${bgColor} w-full max-w-[300px] md:max-w-[500px]  py-2 text-center text-white font-semibold transition-all hover:bg-opacity-80 rounded-lg`}
    >
      {children}
    </button>
  );
};
export default ContactButton;
