"use client";
import { CatsHeader } from "../_components/CatsHeader";
import { FoodSection } from "../_components/FoodSection";

const Page = () => {
  return (
    <div className="w-screen bg-gray-100 p-8 flex flex-col gap-8">
      <CatsHeader />
      <FoodSection />
    </div>
  );
};

export default Page;
