"use client";
import React, { useEffect, useState } from "react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";

import { Stepcompleted } from "./_components/Stepcompleted";
import { useSearchParams } from "next/navigation";

type userType = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Page = () => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const getStep = parseInt(searchParams.get("step") || "0", 10);
    setStep(getStep);
  }, [searchParams]);

  const [userInfo, setUserInfo] = useState<userType>();

  const FormSteps = [StepOne, StepTwo, Stepcompleted][step];

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
    console.log(e.target.value);
    // userInfo?[e.target.name] = e.target.value;
    // setUserInfo({ ...userInfo });
  };

  return (
    <div className=" w-[416px] flex flex-col gap-4 justify-center">
      <FormSteps
        currentStep={step}
        // value={userInfo}
        inputHandler={inputHandler}
        // error={errorMessage}
      />
    </div>
  );
};

export default Page;
