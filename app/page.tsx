/* eslint-disable @next/next/no-img-element */
"use client";
import React, {  } from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import Footer from "./components/footer";
import { DashBoard } from "./components/pages/dashboard";

import Header from "./components/header";
import { SmallHeader } from "./components/small_header";
import { SideBar } from "./components/side_bar";


export default function Home() {
  const user = useAuthContext();
  const router = useRouter();

  return (
    <div data-theme="dark" className="min-h-screen min-w-full">
      <Header />
      <SmallHeader />
      <div className="flex flex-row h-[100%] bg-white">
        <SideBar />
        <div className="w-[100%] bg-white">
          <div className="tab-content min-h-content w-[90%]">
            <DashBoard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
