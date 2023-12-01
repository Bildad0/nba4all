"use client";

import React from "react";
import CreateTaskForm from "@/app/components/create_new_task";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import TaskCard from "@/app/components/fixture_card";

export default function CreateNewTask() {
  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <main className="flex  flex-col justify-center px-10 py-5  gap-8">
        <CreateTaskForm />
        <div className="mt-5  gap-5 py-5">
          <h1 className="py-5 font-bold text-xl">Tasks due</h1>
          <TaskCard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
