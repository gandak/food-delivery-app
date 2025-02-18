import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

const Page = () => {
  return (
    <div className="flex w-[416px] flex-col gap-4 justify-center">
      <div className="border-[1px] w-8 h-8 rounded-lg flex justify-center items-center">
        <ChevronLeft className="w-[15px]" />
      </div>
      <h3 className="font-bold text-[24px]">Create your account</h3>
      <p className="text-[#71717A]">Sign up to explore your favorite dishes.</p>
      <Input type="email" placeholder="Enter you email address" />
      <Button variant="secondary">Let's go</Button>
      <div className="flex justify-center gap-4">
        <p>Already have an account?</p>
        <Link href={"/login"} className="text-[#2563EB]">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Page;
