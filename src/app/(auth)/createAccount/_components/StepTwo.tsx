import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { ChangeEventHandler, MouseEventHandler } from "react";

export const StepTwo = ({
  inputHandler,
  currentStep,
}: {
  inputHandler: ChangeEventHandler<HTMLInputElement>;
  currentStep: number;
}) => {
  const checkValue = () => {
    // setCurrentStep(currentStep + 1);
    console.log(currentStep);
  };

  const goBack = () => {
    // setCurrentStep(currentStep - 1);
  };
  return (
    <div className="flex w-[416px] flex-col gap-4 justify-center">
      <div className="border-[1px] w-8 h-8 rounded-lg flex justify-center items-center">
        <Button
          onClick={goBack}
          size="icon"
          variant={"outline"}
          className="w-8 h-8"
        >
          {" "}
          <ChevronLeft className="w-[15px] h-[15px]" />
        </Button>
      </div>
      <h3 className="font-bold text-[24px]">Create your account</h3>
      <p className="text-[#71717A]">Sign up to explore your favorite dishes.</p>

      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={inputHandler}
      />

      <Input
        type="password"
        name="passwordConfirm"
        placeholder="Confirm password"
        onChange={inputHandler}
      />
    </div>
  );
};
