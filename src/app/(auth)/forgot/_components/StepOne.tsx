"use client";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";
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
import { forgotPasswordRequest } from "@/util/forgotPasswordRequest";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export const StepOne = ({
  currentStep,
  setEmail,
  email,
}: {
  currentStep: number;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
}) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setEmail(values.email);
    forgotPasswordRequest(values.email);
    router.push(`?step=${currentStep + 1}`);
  }
  return (
    <Form {...form}>
      <Link
        href="/login"
        className="w-[36px] h-[36px] border-[1px]  rounded-lg flex justify-center items-center"
      >
        <ChevronLeft className="w-[16px] h-[16px]" />
      </Link>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold text-[24px]">
                Reset your password
              </FormLabel>
              <FormDescription className="text-[16px] text-[#71717A]">
                Enter your email to receive a password reset link.
              </FormDescription>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full ">
          Send link
        </Button>
        <div className="flex gap-4 justify-center">
          <p>Don't have an account?</p>
          <Link href="/login" className="text-[#2563EB]">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
};
