"use client"
import React from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
const {...user} = useAuthContext();
const router = useRouter();

useEffect(()=>{
  if(user==null)router.push("/");
},[router, user])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
   <p></p>
    </main>
  )
}
