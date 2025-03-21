import { Button } from "@/components/ui/button";
import { forgotPasswordRequest } from "@/util/forgotPasswordRequest";
import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

export const Stepcompleted = ({
  currentStep,
  setEmail,
  email,
}: {
  currentStep: number;
  setEmail: Dispatch<SetStateAction<string>>;
  email: string;
}) => {
  const resendEmail = () => {
    forgotPasswordRequest(email);
    alert("Нууц үг сэргээх мэйлийг дахин илгээлээ!");
  };

  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="font-bold text-[18px]">
        Нууц үг сэргээх хүсэлт илгээлээ!
      </h2>
      <p className="text-[#71717A] text-[14px] text-justify">
        Таны {email} имэйл хаяг руу нууц үг сэргээх холбоос явууллаа. Та имэйлээ
        шалгаад, холбоос дээр дарж нууц үгээ сэргээгээрэй. Хэрвээ имэйл ирээгүй
        бол дахин илгээнэ үү.
      </p>

      <Button className="w-full" onClick={resendEmail}>
         Дахин илгээх
      </Button>
    </div>
  );
};
