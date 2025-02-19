import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { ChangeEventHandler, MouseEventHandler } from "react";

export const StepOne = ({
  inputHandler,
  currentStep,
  setCurrentStep,
}: {
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  currentStep: number;
  setCurrentStep: any;
}) => {
  const checkValue = () => {
    setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };
  return (
    <div className="flex w-[416px] flex-col gap-4 justify-center">
      <div className="border-[1px] w-8 h-8 rounded-lg flex justify-center items-center">
        <ChevronLeft className="w-[15px]" />
      </div>
      <h3 className="font-bold text-[24px]">Create your account</h3>
      <p className="text-[#71717A]">Sign up to explore your favorite dishes.</p>
      <Input
        type="email"
        name="email"
        placeholder="Enter you email address"
        onChange={inputHandler}
      />
    </div>
  );
};
