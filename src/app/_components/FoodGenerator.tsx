import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Foods } from "@/util/database";

export const FoodGenerator = ({ food }: { food: Foods }) => {
  return (
    <Card className="w-[397px] h-[342px] bg-white rounded-lg flex items-center justify-center">
      <CardContent className="flex flex-col gap-4">
        <div>
          <Image
            alt=""
            src={food.imageURL}
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          ></Image>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <h3 className="font-bold text-[#EF4444] text-[24px]">
              {food.name}
            </h3>
            <p className="text-[#09090B] font-semibold text-[18px]">
              {food.price}
            </p>
          </div>
          <div>{food.description}</div>
        </div>
      </CardContent>
    </Card>
  );
};
