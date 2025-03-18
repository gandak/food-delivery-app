"use client";
import React from "react";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(`/${value}`);
  };

  return (
    <div className="w-[205px] flex gap-8 flex-col bg-white items-center pt-12">
      <div className="flex items-center">
        <div className="w-[40px] h-[40px]">
          <Image alt="" src="/logo.svg" width={36} height={29} />
        </div>
        <div>
          <h3 className="font-semibold text-[NomNom]">NomNom</h3>
          <p className="text-[#71717A] text-[12px]">Swift delivery</p>
        </div>
      </div>
      <div>
        <ToggleGroup
          type="single"
          className="flex flex-col gap-6"
          onValueChange={handleClick}
        >
          <ToggleGroupItem
            value="foodMenu"
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Food menu</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="orders"
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Orders</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="settings"
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Settings</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
