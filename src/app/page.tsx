"use client";
import { Banner } from "./_components/Banner";
import { Header } from "./_components/Header";
import { HomeFoods } from "./_components/HomeFoods";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-[1440px] m-auto flex flex-col gap-12">
        <Banner />
        <HomeFoods />
      </div>
    </div>
  );
}
