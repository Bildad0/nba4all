"use client";
import { fetchTaskById } from "@/app/api/api";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import React, { useEffect, useState } from "react";

export default function Task() {
  const [task, setTask] = useState({});

  useEffect(() => {
    fetchTaskById("3").then((res) => {
      setTask(res.data);
      console.log(res);
    });
  }, [task, setTask]);

  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <main className="flex  flex-col justify-center px-10 py-5  gap-8">
        <div>{task.task_name}</div>
      </main>
      <Footer />
    </div>
  );
}
