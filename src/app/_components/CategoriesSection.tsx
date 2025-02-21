import React from "react";
import { CategoriesToggle } from "./CategoriesToggle";

export const CategoriesSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-[16px] max-w-[1280px] w-full m-auto">
      <h2 className="text-white font-bold text-[30px]">Categories</h2>
      <CategoriesToggle />
    </div>
  );
};
