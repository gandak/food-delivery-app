import React from "react";
import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  LayoutDashboard,
  Settings,
  Truck,
  Underline,
} from "lucide-react";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export const Sidebar = () => {
  return (
    <div className="w-[205px] flex gap-8 flex-col bg-white h-screen items-center pt-12">
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
        <ToggleGroup type="single" className="flex flex-col gap-6">
          <ToggleGroupItem
            value="bold"
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Food menu</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Orders</p>
          </ToggleGroupItem>
          <ToggleGroupItem
            value={""}
            className="w-[165px] h-[40px] rounded-3xl"
          >
            <p>Settings</p>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};
