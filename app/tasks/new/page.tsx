"use client";

import React from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { Form } from "@/app/components/new_task_form";
import { SmallHeader } from "@/app/components/small_header";

export default function CreateNewTask() {
  return (
    <div data-theme="dark" className="min-h-screen min-w-full">
      <Header />
      <SmallHeader />
      <div className="w-[100%] bg-white">
        <div className="tab-content min-h-content w-[100%]">
          <div className="flex flex-row  justify-around py-8 gap-3">
            <Form />
            <div className="bg-base-300 text-white min-w-[40%]"></div>
            <div className="bg-base-300 text-white min-w-[35%]"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
