import React, { useEffect, useState } from "react";
import { FoodAdd } from "./FoodAdd";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { Foods } from "@/util/types";
import { getCategories } from "@/util/getCategories";
import { categoryType } from "@/util/types";
import { getFoods } from "@/util/getFoods";

export const FoodSection = () => {
  const [categories, setCategories] = useState<[]>([]);
  const [foods, setFoods] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      const foods = await getFoods();

      setCategories(categories.allCategories);
      setFoods(foods.allFood);
    };
    getData();
  }, []);
  // console.log(foods);
  // console.log(categories);

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
