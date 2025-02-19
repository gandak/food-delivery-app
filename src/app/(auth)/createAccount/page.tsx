"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { StepOne } from "./_components/StepOne";
import { StepTwo } from "./_components/StepTwo";
import { ButtonOne } from "./_components/ButtonOne";
import { ButtonTwo } from "./_components/ButtonTwo";
import { Stepcompleted } from "./_components/Stepcompleted";
import { useSearchParams } from "next/navigation";

type userType = {
  email: string;
  password: string;
  confirmPassword: string;
};

// type inputHandler = { inputHandler: (e: any) => void };

const Page = () => {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(0);

  const [userInfo, setUserInfo] = useState<userType>();
  const FormSteps = [StepOne, StepTwo, Stepcompleted][currentStep];
  const Buttons = [ButtonOne, ButtonTwo][currentStep];

  useEffect(() => {
    const getPage = parseInt(searchParams.get("step") || "1", 10);
    setStep(getPage);
  }, [searchParams]);

  console.log(step);

  const inputHandler: React.ChangeEventHandler<HTMLInputElement> = (e: any) => {
    console.log(e.target.value);
    // userInfo?[e.target.name] = e.target.value;
    // setUserInfo({ ...userInfo });
  };

  // const checkValue = () => {
  //   const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  //   const checkError = {
  //     email: !userInfo?.email
  //       ? "Email field is empty"
  //       : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)
  //       ? "Email cannot contain special characters or numbers."
  //       : "",
  //     // password: !userInfo.password
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
  //   };

  return (
    // <StepOne
    //   inputHandler={inputHandler}
    //   currentStep={currentStep}
    //   setCurrentStep={setCurrenStep}
    // />

    <div className="bg-white w-[416px] flex flex-col gap-4 justify-center">
      <FormSteps
        currentStep={currentStep}
        setCurrentStep={setCurrenStep}
        // value={userInfo}
        inputHandler={inputHandler}
        // error={errorMessage}
      />
      {step < 3 ? (
        <Buttons
          // setErrorMessage={setErrorMessage}
          currentStep={step}
          // setCurrenStep={setCurrenStep}
          // userInfo={userInfo}
          // label="Continue"
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Page;
