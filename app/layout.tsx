"use client";

import "./globals.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/app/api/firebase/config";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Loader from "./components/loading";

const auth = getAuth(firebase_app);

export const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userToken, setUserToken] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserToken(user.getIdTokenResult());
          localStorage.setItem("currentUser", user.toJSON().toString());
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
        <meta
          name="keywords"
          content="NBA, Lebron James, cobe, NBA africa"
        />
      </head>
      <body className="min-h-screen overscroll-contain">
        <AuthContext.Provider value={{ userToken }}>
          {loading ? (
           <Loader />
          ) : (
            children
          )}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
