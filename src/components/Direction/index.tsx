import React from "react";

type DirectionProps = {
  direction: string;
};
const Direction: React.FC<DirectionProps> = ({ direction }) => {
  return (
    <div
      className={`min-w-[150px] px-5 py-2 cursor-pointer transition-all duration-150 rounded-xl text-center ${direction === "Bukovel" ? "bg-purple-400 text-white   hover:bg-purple-500 shadow-md shadow-purple-200" : "text-purple-400 hover:bg-purple-50 hover:shadow-md"} `}
    >
      {direction}
    </div>
  );
};
export default Direction;
