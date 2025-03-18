import React, { useEffect, useState } from "react";
import { FoodAdd } from "./FoodAdd";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { foods } from "@/util/database";
import { getCategories } from "@/util/getCategories";
import categoryType from "@/util/types";
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
  console.log(foods);
  // console.log(categories);

  return (
    <div>
      {categories?.map((category: categoryType) => {
        return (
          <div className="bg-white p-6 mb-8 flex flex-col gap-4">
            <h2>{category?.categoryName}</h2>

            <div className="flex flex-wrap gap-8">
              <FoodAdd categoryName={category.categoryName} id={category._id} />

              {foods.map((food) => <FoodGenerator food={food} />).slice(0, 5)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
