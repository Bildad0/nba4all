"use client";
import React from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/fixture_card";

export default function Home() {
  const { ...user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/auth/login");
  }, [router, user]);

  return (
    <div className="min-h-screen">
      <Header  />
      <main className="flex  flex-col items-center justify-between p-24">

        <Card />
      </main>
      <Footer />
    </div>
  );
} 
