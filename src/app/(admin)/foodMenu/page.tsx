"use client";
import React, { useEffect, useState } from "react";
import { foods } from "@/util/database";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FoodGenerator } from "@/app/_components/FoodGenerator";
import { FoodAdd } from "../_components/FoodAdd";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
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

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

type categoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
};

const Page = () => {
  const [categories, setCategories] = useState<[]>();
  const [catValue, setCatValue] = useState<string>("");
  const [isUpdated, setIsUpdated] = useState<boolean>(false);
  const [editCategoryName, setEditCategoryName] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [saveId, setSaveId] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const getCategories = async () => {
    const data = await fetch("http://localhost:4000/food-category");
    const categories = await data.json();
    setCategories(categories.allCategories);
  };

  useEffect(() => {
    getCategories();
  }, [isUpdated]);

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
      setIsUpdated(!isUpdated);
    } else {
      const jsonData = await data.json();
      if (jsonData.error.errorResponse.code == 11000)
        alert("Төрлийн нэр давхцаж байна ");
      else {
        alert("Төрөл нэмэхэд алдаа гарлаа");
      }
    }
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
    alert("Төрөл амжилттай засагдлаа");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCatValue(value);
  };

  const handleClickAdd = () => {
    setIsDialogOpen(true);
    setIsEdit(false);
    setCatValue("");
  };

  const handleClickEdit = (id: string, categoryName: string) => {
    setIsDialogOpen(true);
    // setEditCategoryName(true);
    setCatValue(categoryName);
    setIsEdit(true);
    setSaveId(id);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-screen bg-gray-100 p-8 flex flex-col gap-8">
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
              <ContextMenu>
                <ContextMenuTrigger>
                  <ToggleGroupItem
                    key={index}
                    value={category.categoryName}
                    className="rounded-3xl mb-2 "
                  >
                    <div className="text-nowrap px-4 flex gap-2">
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
              onClick={handleClickAdd} // Open dialog manually
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
                      value={catValue} // Make sure input value is controlled
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
