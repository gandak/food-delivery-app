import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const ButtonTwo = ({ currentStep }: { currentStep: number }) => {
  // const checkValue = () => {

  //     const checkError = {
  //       // password: !userInfo.password
  //     //   ? "Password field is empty."
  //     //   : userInfo.password.length < 6
  //     //   ? "Password must be contain 6 or more characters"
  //     //   : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,16}$/.test(
  //     //       userInfo.password
  //     //     )
  //     //   ? "at least 1 number, 1 uppercase letter, 1 special character"
  //     //   : "",
  //     // passwordConfirm: !userInfo.passwordConfirm
  //     //   ? "Confirm password field is empty."
  //     //   : userInfo.passwordConfirm !== userInfo.password
  //     //   ? "Password are not same. Please input same password"
  //     //   : "",
  //     };

  const goNext = () => {
    setCurrenStep(currentStep + 1);
  };

  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" className="w-full px-8" onClick={goNext}>
        Let's go
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
