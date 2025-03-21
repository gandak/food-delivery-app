"use client";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
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

type UserLoginType = {
  email: string;
  password: string;
};

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
  password: z.string(),
});

const loginPage = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  type UserLoginType = {
    email: string;
    password: string;
  };

  const loginUser = async (values: UserLoginType) => {
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    });

    const jsonData = await response.json();
    if (jsonData.email) router.push("/");
    return jsonData;
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const loginInfo = await loginUser(values);
    // console.log(loginInfo);
    if (!loginInfo.email) {
      alert(loginInfo.message);
    }

    localStorage.setItem("loggedUserEmail", loginInfo.email);
  }

  return (
    <div className="w-[416px]">
      <Form {...form}>
        <Link
          href="/"
          className="w-[36px] h-[36px] border-[1px]  rounded-lg flex justify-center items-center "
        >
          <ChevronLeft className="w-[16px] h-[16px]" />
        </Link>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 py-[16px]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold text-[24px]">Log in</FormLabel>
                <FormDescription className="text-[16px] text-[#71717A]  pb-[16px]">
                  Log in to enjoy your favorite dishes.
                </FormDescription>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="Password"
                    placeholder="Enter your password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <br />
          <Link
            href="/forgot"
            className="underline decoration-solid text-[14px] text-[#18181B]"
          >
            Forgot password?
          </Link>

          <Button type="submit" className="w-full opacity-20 hover:opacity-100">
            Submit
          </Button>
          <div className="flex gap-4 justify-center">
            <p>Don't have an account?</p>
            <Link href="/createAccount" className="text-[#2563EB]">
              Sign up
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default loginPage;
