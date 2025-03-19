import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Foods } from "@/util/types";
import { EditFood } from "../(admin)/_components/EditFood";

export const FoodGenerator = ({
  food,
  index,
  category,
  categoryId,
  foodId,
}: {
  food: Foods;
  index: number;
  category: string;
  categoryId: string;
  foodId: string;
}) => {
  const ingredients = food.ingredients.substring(0, 100);
  const foodName = food.foodName.substring(0, 40);
  return (
    <Card
      key={index}
      className="w-[350px] h-[350px] bg-white rounded-3xl flex pt-6"
    >
      <CardContent className="flex flex-col gap-2 ">
        <div className="w-full overflow-hidden flex items-center rounded-2xl relative">
          <EditFood
            foodName={foodName}
            category={category}
            categoryId={categoryId}
            ingredients={food.ingredients}
            price={food.price}
            image={food.image}
            foodId={foodId}
          />
          <Image alt="" src={food.image} width={300} height={0}></Image>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className=" text-[#EF4444] text-[20px]">{foodName}</h3>
            <p className="text-[#09090B] text-[18px]">${food.price}</p>
          </div>
          <div>{ingredients}</div>
        </div>
      </CardContent>
    </Card>
  );
};
