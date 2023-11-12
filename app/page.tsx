"use client";
import React from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";

export default function Home() {
  const { ...user } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) router.push("/auth/login");
  }, [router, user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
    </main>
  );
}
