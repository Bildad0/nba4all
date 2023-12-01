"use client";
import React from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import TaskCard from "./components/fixture_card";

export default function Home() {
  const user = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/auth/login");
    }
  }, [router, user]);

  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <main className="flex  flex-col justify-center px-10 py-5  gap-8">
        <TaskCard />
      </main>
      <Footer />
    </div>
  );
}
