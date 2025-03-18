import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Input } from "@/components/ui/input";
import { getFoods } from "@/util/getFoods";
import { Foods } from "@/util/database";

type categoryType = {
  category: {
    categoryName: string;
  };
  createdAt: Date;
  updatedAt: Date;
  _id: string;
};

export const CatsHeader = () => {
  const [categories, setCategories] = useState<[]>();
  const [catValue, setCatValue] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [saveId, setSaveId] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [foods, SetFoods] = useState<[]>([]);
  const [foodCount, setFoodCount] = useState<{ [key: string]: number }>({});

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const categories = await data.json();
    setCategories(categories.allCategories);
  };

  useEffect(() => {
    getCategories();
    const getAllFoods = async () => {
      const allFoods = await getFoods();
      SetFoods(allFoods.allFood);
    };
    getAllFoods();
  }, []);

  const addCategory = async (categoryName: string) => {
    const data = await fetch("http://localhost:4000/food-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ categoryName: `${categoryName}` }),
    });

    if (data.status == 200) {
      alert("Төрөл амжилттай нэмлээ");
    } else {
      const jsonData = await data.json();
      if (jsonData.error.errorResponse.code == 11000)
        alert("Төрлийн нэр давхцаж байна ");
      else {
        alert("Төрөл нэмэхэд алдаа гарлаа");
      }
    }
    getCategories();
  };

  const editCategory = async (id: string, categoryName: string) => {
    try {
      await fetch(`http://localhost:4000/food-category/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryName }),
      });
    } catch (error) {
      console.log("error", error);
      alert("aldaa garlaa");
    }
    getCategories();
  };

  const deleteCategory = async (id: string) => {
    try {
      await fetch(`http://localhost:4000/food-category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log("error", error);
      alert("aldaa garlaa");
    }
    getCategories();
  };

  const submitCat = () => {
    if (isEdit) {
      editCategory(saveId, catValue);
    } else {
      addCategory(catValue);
    }
  };

  const handleClickAdd = () => {
    setIsDialogOpen(true);
    setIsEdit(false);
    setCatValue("");
  };

  const handleClickEdit = (id: string, categoryName: string) => {
    setIsDialogOpen(true);
    setCatValue(categoryName);
    setIsEdit(true);
    setSaveId(id);
  };

  console.log(foods);

  const countFoodsInCategories = () => {
    const count: { [key: string]: number } = {};

    categories?.map((category: categoryType) => {
      count[category._id] = foods.filter(
        (food: Foods) => food.category._id === category._id
      ).length;
    });

    setFoodCount(count);
  };

  useEffect(() => {
    if (categories?.length && foods?.length) {
      countFoodsInCategories();
    }
  }, [categories, foods]);

  console.log(foodCount);

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h2 className="text-20px font-bold">Dishes category</h2>
      <div className="flex gap-8 flex-wrap items-center ">
        <ToggleGroup
          type="multiple"
          variant="outline"
          className="flex flex-wrap py-2  items-center"
        >
          <ToggleGroupItem value="all" className="rounded-3xl mb-2">
            <div className="text-nowrap px-4 flex gap-2 items-center">
              All Dishes{" "}
              <div className="bg-black rounded-3xl h-[20px] flex items-center">
                <p className="text-white px-3 text-[12px]">5</p>
              </div>
            </div>
          </ToggleGroupItem>

          {categories?.map((category: categoryType, index: number) => (
            <ContextMenu key={index}>
              <ContextMenuTrigger>
                <ToggleGroupItem
                  key={index}
                  value={category.categoryName}
                  className="rounded-3xl mb-2 "
                >
                  <div key={index} className="text-nowrap px-4 flex gap-2">
                    {category.categoryName}{" "}
                    <div className="bg-black rounded-3xl h-[20px] flex items-center">
                      <p className="text-white px-3 text-[12px]">5</p>
                    </div>
                  </div>
                </ToggleGroupItem>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem
                  onClick={() =>
                    handleClickEdit(category._id, category.categoryName)
                  }
                >
                  Edit
                </ContextMenuItem>
                <ContextMenuItem onClick={() => deleteCategory(category._id)}>
                  Delete
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ))}

          <div
            className="cursor-pointer bg-[#EF4444] w-[36px] h-[36px] rounded-full flex justify-center items-center"
            onClick={handleClickAdd}
          >
            <Plus color="#ffffff" />
          </div>

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {isEdit ? "Edit category name" : "Add new category"}
                </DialogTitle>
              </DialogHeader>
              <div className="gap-4 py-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-right">
                    <p className="font-bold text-left">Category name</p>
                  </Label>
                  <Input
                    id="name"
                    value={catValue}
                    onChange={(e) => setCatValue(e.target.value)}
                    className="col-span-3"
                    placeholder="Placeholder"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit" className="px-4" onClick={submitCat}>
                    <p>{isEdit ? "Save Changes" : "Add category"}</p>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ToggleGroup>
      </div>
    </div>
  );
};
