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
    message: "Must be at least 3 characters.",
  }),
  price: z.string().min(1, {
    message: "Must be at least 1 character.",
  }),
  ingredients: z.string().min(3, {
    message: "Must be at least 3 characters.",
  }),
  image: z.string().url().optional(), // Ensure image is a valid URL
});

export const FoodAdd = () => {
  const [image, setImage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
      image: "",
    },
  });

  const onImageUpload = (imageUrl: string) => {
    setImage(imageUrl);
    form.setValue("image", imageUrl);

    console.log(image);

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
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!values.image) {
      alert("Please upload an image.");
      return;
    }
    console.log("Submitted Data:", values);
    // Add API call to save food item
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black w-[397px] h-[342px] rounded-3xl border-2 border-[#EF4444] flex flex-col items-center justify-center">
          <div className="bg-[#EF4444] h-[40px] w-[40px] rounded-3xl flex justify-center items-center ">
            <Plus color="#ffffff" />
          </div>
          <div className="text-wrap w-[120px]">Add new Dish</div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Add new Dish</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <FormLabel>Food name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter food name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-4">
                    <FormLabel>Food price</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                  <FormLabel>Ingredients</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter ingredients" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CloudinaryUpload onUpload={onImageUpload} />
            {image && (
              <img
                src={image}
                alt="Uploaded"
                className="w-32 h-32 rounded-md"
              />
            )}

            <Button type="submit" className="px-4">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
