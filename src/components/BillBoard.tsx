"use client";
import React from "react";

const BillBoard = () => {
  return (
    <div className="w-full h-screen">
      <video
        src={"/videos/example.mp4"}
        className="w-full h-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default BillBoard;
