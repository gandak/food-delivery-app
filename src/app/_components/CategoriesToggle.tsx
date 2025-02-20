import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import React from "react";
import { categories } from "@/util/database";

export const CategoriesToggle = () => {
  return (
    <div className="rounded-3xl flex justify-center">
      <ToggleGroup type="multiple" className="flex gap-4 ">
        {categories.map((category) => (
          <ToggleGroupItem
            key={category.id}
            value={category.name}
            aria-label={category.name}
            className="rounded-2xl hover:bg-[#EF4444] px-4 h-[36px]"
          >
            <p>{category.name}</p>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};
