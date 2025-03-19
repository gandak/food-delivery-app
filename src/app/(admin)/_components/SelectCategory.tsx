import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCategories } from "@/util/getCategories";
import categoryType from "@/util/types";

export const SelectCategory = ({
  defaultCategory,
}: {
  defaultCategory: string;
}) => {
  const [categories, setCategories] = useState<[]>([]);

  useEffect(() => {
    const getAllCategories = async () => {
      const getAllCategories = await getCategories();
      console.log(getAllCategories);
      setCategories(getAllCategories.allCategories);
    };
    getAllCategories();
  }, []);

  console.log(categories);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={defaultCategory} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select category</SelectLabel>
          {categories?.map((category: categoryType, index: number) => {
            return (
              <SelectItem key={index} value={category.categoryName}>
                {category.categoryName === defaultCategory ? (
                  <p className="text-semibold">{category.categoryName}</p>
                ) : (
                  <p>{category.categoryName}</p>
                )}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
