import React from "react";
import { FoodGenerator } from "./FoodGenerator";
import { foods } from "@/util/database";
import { Divide } from "lucide-react";

export const AppetizerSection = () => {
  return (
    <div className="max-w-[1264px] w-full m-auto flex flex-col gap-4 ">
      <p className="text-white font-bold text-[30px]">Appetizer</p>
      <div className="flex flex-wrap gap-8 justify-between">
        {foods?.map((food) => (
          <div>
            <FoodGenerator food={food} />
          </div>
        ))}
      </div>
    </div>
  );
};
