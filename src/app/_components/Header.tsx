import React from "react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="w-screen bg-black">
      <div className="max-w-[1440px] flex-justify-between">
        <div>
          <Image alt="" src="/logo.svg"></Image>
        </div>
      </div>
    </div>
  );
};
