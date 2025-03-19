"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SelectCategory } from "./SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const formSchema = z.object({
  dishname: z.string().min(3, {
    message: "Dishname must be at least 3 characters.",
  }),
  category: z.string().min(3, {
    message: "Category must be at least 3 characters.",
  }),
  ingredients: z.string().min(3, {
    message: "Ingredients must be at least 3 characters.",
  }),
  price: z.number().min(3, {
    message: "Ingredients must be at least 1 characters.",
  }),
  image: z.string().min(3, {
    message: "Ingredients must be at least 3 characters.",
  }),
});

export const EditFood = ({
  foodName,
  category,
  categoryId,
  ingredients,
  price,
  image,
}: {
  foodName: string;
  category: string;
  categoryId: string;
  ingredients: string;
  price: number;
  image: string;
}) => {
  console.log(category);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dishname: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  form.setValue("dishname", foodName);
  form.setValue("category", category);
  form.setValue("price", price);
  form.setValue("ingredients", ingredients);
  form.setValue("image", image);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[44px] h-[44px] z-20 absolute right-3 bottom-3 bg-white rounded-full">
          <div className="flex items-center justify-center">
            <Pen color="#EF4444" />
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="dishname"
                render={({ field }) => (
                  <FormItem className="flex gap-12 ">
                    <FormLabel className="text-[12px] text-[#71717A] text-nowrap pt-2 w-[35px]">
                      Dish name
                    </FormLabel>
                    <FormControl>
                      <Input {...field} className="text-[14px] " />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="flex gap-12 ">
                    <FormLabel className="text-[12px] text-[#71717A] text-nowrap pt-2 w-[35px]">
                      Category
                    </FormLabel>
                    <FormControl>
                      <SelectCategory defaultCategory={category} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ingredients"
                render={({ field }) => (
                  <FormItem className="flex gap-12">
                    <FormLabel className="text-[12px] text-[#71717A] text-nowrap pt-2 w-[35px]">
                      Ingredients
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                        className="h-[120px]"
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="flex gap-12">
                    <FormLabel className="text-[12px] text-[#71717A] text-nowrap pt-2 pr-2 w-[35px]">
                      Price
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="flex gap-12">
                    <FormLabel className="text-[12px] text-[#71717A] text-nowrap pt-2 w-[35px]">
                      Image
                    </FormLabel>
                    <FormControl>
                      <Image
                        alt=""
                        src={image}
                        width={240}
                        height={100}
                      ></Image>
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end">
                <Button type="submit" className="px-4 mt-4 ">
                  Submit
                </Button>
              </div>
            </form>
          </Form>

          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div> */}
        </div>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
