"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setDirection } from "@/store/direction/slice";

type DirectionProps = {
  direction: string;
};
const Direction: React.FC<DirectionProps> = ({ direction }) => {
  const { direction: currentDirection } = useAppSelector(
    (state) => state.direction
  );
  const dispatch = useAppDispatch();
  const handleChangeDirection = () => {
    dispatch(setDirection(direction));
  };

  return (
    <div
      className={`min-w-[150px] px-5 py-2 cursor-pointer transition-all duration-150 rounded-xl text-center ${direction === currentDirection ? "bg-purple-400 text-white   hover:bg-purple-500 shadow-md shadow-purple-200" : "text-purple-400 hover:bg-purple-50 hover:shadow-md"} `}
      onClick={handleChangeDirection}
    >
      {direction}
    </div>
  );
};
export default Direction;
