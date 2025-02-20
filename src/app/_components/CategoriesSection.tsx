import React from "react";
import { CategoriesToggle } from "./CategoriesToggle";

export const CategoriesSection = () => {
  return (
    <div className="flex flex-col gap-4 pt-[16px]">
      <h2 className="text-white font-bold text-[30px]">Categories</h2>
      <CategoriesToggle />
    </div>
  );
};
