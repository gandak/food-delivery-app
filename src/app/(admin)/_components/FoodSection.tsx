import React from "react";
import { FoodAdd } from "./FoodAdd";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { foods } from "@/util/database";

export const FoodSection = () => {
  return (
    <div className="bg-white p-6">
      <h2>Appetizers</h2>
      <div className="flex flex-wrap gap-8">
        <FoodAdd />
        {foods.map((food) => (
          <FoodGenerator food={food} />
        ))}
      </div>
    </div>
  );
};
