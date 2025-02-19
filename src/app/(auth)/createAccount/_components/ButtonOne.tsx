import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const ButtonOne = ({ currentStep }: { currentStep: number }) => {
  // const checkValue = () => {
  //     const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  //     const checkError = {
  //       email: !userInfo?.email
  //         ? "Email field is empty"
  //         : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)
  //         ? "Email cannot contain special characters or numbers."
  //         : "",
  //     };

  const goNext = () => {
    // setCurrenStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" className="w-full px-8" onClick={goNext}>
        Let's go 1
      </Button>
      <div className="flex justify-center gap-4">
        <p>Already have an account?</p>
        <Link href={"/login"} className="text-[#2563EB]">
          Log in
        </Link>
      </div>
    </div>
  );
};
