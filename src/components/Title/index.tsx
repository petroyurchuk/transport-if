type TitleProps = {
  tag: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  styles?: string;
};

const Title: React.FC<TitleProps> = ({ tag, children, styles }) => {
  const Tag = tag;
  return (
    <Tag
      className={`bg-clip-text bg-gradient-to-r from-purple-800 via-green-600 to-orange-300 text-transparent animate-gradient whitespace-nowrap ${styles}`}
      style={{
        backgroundSize: "300%",
        backgroundPosition: "-100%",
      }}
    >
      {children}
    </Tag>
  );
};
export default Title;
