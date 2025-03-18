import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Foods } from "@/util/database";

export const FoodGenerator = ({ food }: { food: Foods }) => {
  const ingredients = food.ingredients.substring(0, 100);
  return (
    <Card className="w-[397px] h-[342px] bg-white rounded-3xl flex pt-6">
      <CardContent className="flex flex-col gap-2 ">
        <div className="w-[full] h-[180px] overflow-hidden flex items-center rounded-2xl">
          <Image alt="" src={food.image} width={397} height={50}></Image>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h3 className=" text-[#EF4444] text-[20px]">{food.foodName}</h3>
            <p className="text-[#09090B] text-[18px]">${food.price}</p>
          </div>
          <div>{ingredients}</div>
        </div>
      </CardContent>
    </Card>
  );
};
