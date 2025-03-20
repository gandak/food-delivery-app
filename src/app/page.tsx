"use client";
import { useEffect, useState } from "react";
import { Banner } from "./_components/Banner";
import { Header } from "./_components/Header";
import { HomeFoods } from "./_components/HomeFoods";

export default function Home() {
  const [loggedUser, setLoggedUser] = useState<string | null>(null);

  // if (!loggedUser) {
  //   alert("Aldaa garlaa");
  //   return;
  // }

  useEffect(() => {
    // Only runs on the client
    const userEmail = localStorage.getItem("loggedUserEmail");
    setLoggedUser(userEmail);
  }, []);

  return (
    <div className="w-full">
      <Header loggedUser={loggedUser} />
      <div className="max-w-[1440px] m-auto flex flex-col gap-12">
        <Banner />
        <HomeFoods />
      </div>
    </div>
  );
}
