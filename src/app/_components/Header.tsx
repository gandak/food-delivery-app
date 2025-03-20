import React from "react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ShoppingCart, User } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Header = ({ loggedUser }: { loggedUser: string }) => {
  const router = useRouter();
  const signOut = () => {
    localStorage.removeItem("loggedUserEmail");
  };
  return (
    <div className="bg-black w-full py-2">
      <div className="max-w-[1440px] m-auto flex justify-between px-24 items-center">
        <Image alt="" src="/logoH.svg" width={146} height={44}></Image>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger>
              <div className="flex justify-center items-center bg-white rounded-full w-9 h-9">
                <ShoppingCart className="w-4" />
              </div>
            </SheetTrigger>
            <SheetContent className="bg-[#404040]">
              <SheetHeader>
                <SheetTitle className="flex gap-4">
                  <ShoppingCart className="w-4" color="white" />
                  <p className="text-white">Order detail</p>
                </SheetTitle>
                <SheetDescription>Order</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <div className="flex justify-center items-center bg-[#EF4444] rounded-full w-9 h-9 ">
                <User className="w-4" color="white" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex flex-col items-center gap-3">
                <p className="text-black">{loggedUser}</p>
                {loggedUser ? (
                  <Button
                    className="bg-[#F4F4F5] px-4 text-black rounded-3xl"
                    onClick={signOut}
                  >
                    <p>Sign out</p>
                  </Button>
                ) : (
                  <div className="flex flex-col gap-4">
                    <p className="font-normal">Click below to login</p>
                    <Link href="/login">
                      <div className="bg-[#F4F4F5] px-4 text-black rounded-3xl">
                        <p className="text-center py-2">LOGIN</p>
                      </div>
                    </Link>
                  </div>
                )}
              </DropdownMenuLabel>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
