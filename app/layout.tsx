"use client";

import "./globals.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/app/api/firebase/config";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext } from "react";
import Loader from "./components/loading";
import { getUserByEmail } from "./api/api";

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          getUserByEmail(user.email || "ireen@gmail.com").then(
            (response) => {
              console.log("user response: ", response.data[0]);
              localStorage.setItem("user", JSON.stringify(response.data[0]));
            }
          );
        } else {
          router.push("/auth/signup");
        }
        setLoading(false);
      });
      return () => unsubscribe();
    }, 5000);
  }, [router]);

  return (
    <html lang="en" data-theme="night">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>NBA for All</title>
        <meta
          name="description"
          content="NBA all stars statistics and game records."
        />
        <meta name="keywords" content="NBA, Lebron James, cobe, NBA africa" />
      </head>
      <body className="min-h-screen overscroll-contain">
        <AuthContext.Provider value={{ user }}>
          {loading ? <Loader /> : children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
