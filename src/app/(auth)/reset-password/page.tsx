"use client";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";
import { StepOne } from "./_components/StepOne";
import { Stepcompleted } from "./_components/Stepcompleted";

const resetPasswordPage = () => {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    const getStep = parseInt(searchParams.get("step") || "0", 10);
    setStep(getStep);
  }, [searchParams]);

  const FormSteps = [StepOne, Stepcompleted][step];

  return (
    <div className="w-[416px]">
      <FormSteps currentStep={step} />
    </div>
  );
};

export default resetPasswordPage;
