"use client";
import { getCategories } from "@/util/getCategories";
import React, { useEffect, useState } from "react";
import { HomeSectionGenerator } from "./HomeSectionGenerator";

export const HomeFoods = () => {
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      setCategories(categories.allCategories);
    };
    getData();
  }, []);

  console.log(categories);
  return (
    <div className="max-w-[1264px] w-full m-auto flex flex-col gap-4 ">
      <div className="flex flex-col flex-wrap gap-8 justify-between">
        {categories?.map((category) => (
          <HomeSectionGenerator category={category} />
        ))}
      </div>
    </div>
  );
};
