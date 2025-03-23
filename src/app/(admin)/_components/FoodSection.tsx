import React, { useEffect, useState } from "react";
import { FoodAdd } from "./FoodAdd";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { Foods } from "@/util/types";
import { getCategories } from "@/util/getCategories";
import { categoryType } from "@/util/types";
import { getFoods } from "@/util/getFoods";
import { useFoods } from "@/app/_context/FoodContext";
import { useCategories } from "@/app/_context/CategoryContext";

export const FoodSection = () => {
  const { foods } = useFoods();
  const { categories } = useCategories();

  if (!foods) {
    return;
  }

  return (
    <div>
      {categories?.map((category: categoryType, index: number) => {
        return (
          <div key={index} className="bg-white p-6 mb-8 flex flex-col gap-4">
            <h2 key={category._id}>{category?.categoryName}</h2>

            <div key={index} className="flex flex-wrap gap-8">
              <FoodAdd categoryName={category.categoryName} id={category._id} />

              {foods
                .filter((food: Foods) => food.category._id === category._id)
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
                .slice(0, 5)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
