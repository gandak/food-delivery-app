"use client";
import { categoryType, Foods } from "@/util/types";
import React from "react";
import { FoodGenerator } from "./FoodGenerator";
import { useFoods } from "../_context/FoodContext";

export const HomeSectionGenerator = ({
  category,
}: {
  category: categoryType;
}) => {
  const { foods, setFoods } = useFoods();

  if (!foods) {
    return;
  }

  return (
    <div>
      <h2 className="text-white font-semibold text-[30px]">
        {category.categoryName}
      </h2>
      <div className="flex flex-wrap gap-6">
        {foods
          .filter((food: Foods) => {
            return food.category._id === category._id;
          })
          .map((food: Foods, index: number) => {
            return (
              <FoodGenerator
                food={food}
                index={index}
                category={category.categoryName}
                categoryId={category._id}
                foodId={food._id}
              />
            );
          })
          .slice(0, 6)}
      </div>
    </div>
  );
};
function useFood(): { foods: any; setFoods: any } {
  throw new Error("Function not implemented.");
}
