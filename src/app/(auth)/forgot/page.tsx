"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { StepOne } from "./_components/StepOne";
import { Stepcompleted } from "./_components/Stepcompleted";

const forgotPage = () => {
  const searchParams = useSearchParams();
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const getStep = parseInt(searchParams.get("step") || "0", 10);
    setStep(getStep);
  }, [searchParams]);

  const FormSteps = [StepOne, Stepcompleted][step];

  return (
    <div className="w-[416px] ">
      <FormSteps currentStep={step} setEmail={setEmail} email={email} />
    </div>
  );
};

export default forgotPage;
