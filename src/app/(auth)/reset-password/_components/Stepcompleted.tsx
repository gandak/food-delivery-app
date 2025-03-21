import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const Stepcompleted = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="text-center flex flex-col gap-4">
      <h2 className="font-bold text-[18px]">Нууц үг шинэчиллээ!</h2>
      <p className="text-[#71717A] text-[14px] text-justify">
        Таны нууц үгийг амжилттай шинэчиллээ. Та нэвтрэх товч дээр дарж нэвтэрнэ
        үү.
      </p>

      <Link href="/login">
         <Button className="px-4">Нэвтрэх</Button>
      </Link>
    </div>
  );
};
