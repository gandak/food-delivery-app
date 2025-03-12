import React, { useState } from "react";
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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

type Food = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
  category: {};
};

type FoodValue = {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
};

export const FoodAdd = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [food, setFood] = useState<Food>();
  const [foodValues, setFoodValues] = useState<>();

  // const;

  const addFood = async () => {};

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black w-[397px] h-[342px] rounded-3xl border-2 border-[#EF4444] flex flex-col items-center justify-center">
          <div className="bg-[#EF4444] h-[40px] w-[40px] rounded-3xl flex justify-center items-center ">
            <Plus color="#ffffff" />
          </div>
          <div className="text-wrap w-[120px]">Add new Dish to Salads</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add new Dish to Appetizers</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-left">
                <p className="font-semibold">Food Name</p>
              </Label>
              <Input id="name" placeholder="" className="col-span-3" />
            </div>
            <div className="">
              <Label htmlFor="number" className="text-left">
                <p className="font-semibold">Food Price</p>
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="username" className="text-left">
              <p className="font-semibold">Ingredients</p>
            </Label>
            <Textarea placeholder="Type your ingredients here." />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="px-4">
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
