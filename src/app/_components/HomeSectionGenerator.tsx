"use client";
import { getFoods } from "@/util/getFoods";
import { categoryType, Foods } from "@/util/types";
import React, { useEffect, useState } from "react";
import { FoodGenerator } from "./FoodGenerator";

export const HomeSectionGenerator = ({
  category,
}: {
  category: categoryType;
}) => {
  const [foods, setFoods] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const foods = await getFoods();

      setFoods(foods.allFood);
    };
    getData();
  }, []);

  console.log("foods: ", foods);
  console.log("category: ", category);

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
