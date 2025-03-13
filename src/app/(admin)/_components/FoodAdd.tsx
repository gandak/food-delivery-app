import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Textarea } from "@/components/ui/textarea";
import { CloudinaryUpload } from "@/app/uploader/_components/CloudinaryUpload";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "must be at least 3 characters.",
  }),
  price: z.string().min(1, {
    message: "must be at least 3 characters.",
  }),
  ingredients: z.string().min(3, {
    message: "must be at least 5 characters.",
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
  const [file, setFile] = useState<File | null>();
  const [image, setImage] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [food, setFood] = useState<Food>();
  const [foodValues, setFoodValues] = useState();

  const addFood = async () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    setFile(file);

    const tempImageUrl = URL.createObjectURL(file);
    setImage(tempImageUrl);
  };

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
        <DialogTitle>
          <h2>Add new Dish to Appetizers</h2>
        </DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4">
              {" "}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <div className="flex gap-2">
                      {" "}
                      <div className="flex flex-col gap-2">
                        <FormLabel>
                          <p>Food name</p>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Enter food name" {...field} />
                        </FormControl>
                        <FormMessage className="text-[11px]" />
                      </div>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <FormLabel>
                        <p>Food price</p>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter price" {...field} />
                      </FormControl>
                      <FormMessage className="text-[11px]" />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <FormLabel>
                      <p>Ingredients</p>
                    </FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter ingredients" {...field} />
                    </FormControl>
                    <FormMessage className="text-[11px]" />
                  </div>
                </FormItem>
              )}
            />
            <CloudinaryUpload />

            <Button type="submit" className="px-4 " onClick={addFood}>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
