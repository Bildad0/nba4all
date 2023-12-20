import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Settings } from "../components/pages/setting";
import { SideBar } from "../components/side_bar";
import { SmallHeader } from "../components/small_header";

export default function Page() {
  return (
    <div data-theme="dark" className="min-h-screen min-w-full">
      <Header />
      <SmallHeader />
      <div className="flex flex-row h-[100%] bg-white">
        <SideBar />
        <div className="w-[100%] bg-white">
          <div className="tab-content min-h-content w-[90%]">
            <Settings />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
