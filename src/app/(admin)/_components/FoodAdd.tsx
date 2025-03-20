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
import { imageUpload } from "@/util/imageUpload";

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
  image: z.string(),
});

export const FoodAdd = ({
  categoryName,
  id,
}: {
  categoryName: string;
  id: string;
}) => {
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      price: "",
      ingredients: "",
      image: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!file) {
      alert("Зурагаа сонгоогүй байна");
      return;
    }

    try {
      const imageUrl = await imageUpload(file);

      if (!imageUrl) {
        alert("Image upload failed.");
        return;
      }

      setImage(imageUrl);
      values.image = imageUrl;

      const response = await fetch("http://localhost:4000/food", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          foodName: values.name,
          price: values.price,
          image: values.image,
          ingredients: values.ingredients,
          category: id,
        }),
      });

      const jsonData = await response.json();
      console.log("Server Response:", jsonData);
      alert("Food added successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding food.");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black w-[350px] h-[350px] rounded-3xl border-2 border-dashed border-spacing border-[#EF4444] flex flex-col items-center justify-center">
          <div className="bg-[#EF4444] h-[40px] w-[40px] rounded-3xl flex justify-center items-center ">
            <Plus color="#ffffff" />
          </div>
          <div className="text-wrap w-[120px]">
            Add new Dish to {categoryName}
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Add new Dish to {categoryName}</DialogTitle>
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

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel></FormLabel>
                  <FormControl>
                    <CloudinaryUpload setFile={setFile} setImage={setImage} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {image && (
              <img src={image} alt="preview" className="w-64 rounded-md" />
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
