"use client";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { ChangeEventHandler, useState } from "react";
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
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must include at least one uppercase letter.",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must include at least one lowercase letter.",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must include at least one number.",
      }),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export const StepTwo = ({
  inputHandler,
  currentStep,
}: {
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  currentStep: number;
}) => {
  const [isView, setIsView] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`?step=${currentStep + 1}`);
  }

  const checkValue = () => {};

  const goBack = () => {
    router.push(`?step=${currentStep - 1}`);
  };

  const showHidePass = () => {
    console.log("worj");
    setIsView(!isView);
  };
  return (
    <Form {...form}>
      <Button
        onClick={goBack}
        size="icon"
        variant={"outline"}
        className="w-8 h-8"
      >
        {" "}
        <ChevronLeft className="w-[15px] h-[15px]" />
      </Button>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-[24px]">
                Create a strong password
              </FormLabel>
              <FormDescription className="text-[16px] text-[#71717A]">
                Create a strong password with letters, numbers.
              </FormDescription>
              <FormControl>
                <Input
                  type={isView ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type={isView ? "text" : "password"}
                  placeholder="Confirm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center space-x-2">
          <Checkbox
            id="password"
            className="opacity-50"
            onCheckedChange={showHidePass}
          />
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed text-[#71717A]"
          >
            Show password
          </label>
        </div>

        <Button type="submit" className="w-full ">
          Submit
        </Button>
        <div className="flex gap-4 justify-center">
          <p>Already have an account?</p>
          <Link href="/login" className="text-[#2563EB]">
            Log in
          </Link>
        </div>
      </form>
    </Form>
  );
};
