"use client";
import React, { useEffect, useState } from "react";
import { foods } from "@/util/database";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { FoodAdd } from "../_components/FoodAdd";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

type categoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
};

const Page = () => {
  const [categories, setCategories] = useState<[]>();

  useEffect(() => {
    const getCategories = async () => {
      const data = await fetch("http://localhost:4000/food-category");
      const categories = await data.json();
      setCategories(categories.allCategories);
    };
    getCategories();
  }, []);

  const addCategory = async () => {
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      body: JSON.stringify({ categoryName: "turshilt" }),
    });
  };

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
            {categories?.map((category: categoryType, index: number) => (
              <ToggleGroupItem
                key={index}
                value={category.categoryName}
                className="rounded-3xl mb-2"
              >
                <div className="text-nowrap px-4 flex gap-2">
                  {category.categoryName}{" "}
                  <div className="bg-black rounded-3xl h-[20px] flex items-center">
                    <p className="text-white px-3 text-[12px]">5</p>
                  </div>
                </div>
              </ToggleGroupItem>
            ))}

            <ToggleGroupItem value="All" className="rounded-3xl mb-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="bg-transparent border-0">
                    <div className="bg-[#EF4444] h-[40px] w-[40px] rounded-3xl flex justify-center items-center ">
                      <Plus color="#ffffff" />
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input
                        id="name"
                        value="Pedro Duarte"
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Username
                      </Label>
                      <Input
                        id="username"
                        value="@peduarte"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </ToggleGroupItem>
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
