import React from "react";
import { categories, foods } from "@/util/database";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { FoodAdd } from "../_components/FoodAdd";
const Page = () => {
  return (
    <div className="w-screen bg-gray-100 p-8 flex flex-col gap-8">
      <div className="bg-white p-6 rounded-lg ">
        <h2 className="text-20px font-bold">Dishes category</h2>
        <div className="flex gap-8 flex-wrap">
          <ToggleGroup
            type="multiple"
            variant="outline"
            className="flex flex-wrap justify-start py-2"
          >
            <ToggleGroupItem value="All" className="rounded-3xl mb-2">
              <div className="text-nowrap px-4 flex gap-2">
                All Dishes{" "}
                <div className="bg-black rounded-3xl h-[20px] flex items-center">
                  <p className="text-white px-3 text-[12px]">5</p>
                </div>
              </div>
            </ToggleGroupItem>
            {categories.map((category, index) => (
              <ToggleGroupItem
                value={category.name}
                className="rounded-3xl mb-2"
              >
                <div className="text-nowrap px-4 flex gap-2">
                  {category.name}{" "}
                  <div className="bg-black rounded-3xl h-[20px] flex items-center">
                    <p className="text-white px-3 text-[12px]">5</p>
                  </div>
                </div>
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div className="bg-white p-6">
        <h2>Appetizers</h2>
        <div className="flex flex-wrap gap-8">
          <FoodAdd />
          {foods.map((food) => (
            <FoodGenerator food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
