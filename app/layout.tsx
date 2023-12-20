"use client";

import "./globals.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/app/api/firebase/config";
import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useContext, createContext } from "react";
import Loader from "./components/loading";
import { getUserByEmail, userProfile } from "./api/api";

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
          if (user.getIdTokenResult() != undefined) {
            setUserToken(user.getIdToken());
            getUserByEmail(user.email || "ireen@gmail.com")
              .then(async (response) => {
                if (response.data == null) {
                  return router.push("/updateProfile");
                }
                const currentUser = response.data[0];
                if (currentUser != null) {
                  await userProfile(currentUser.user_id).then((response) => {
                    if (response.data == null) return router.push("/tasks/new");
                  });
                }
              });
          }
          router.push("/auth/login");
        } else {
          router.push("/auth/signup");
        }
      });
      setLoading(false);
      return () => unsubscribe();
    }, 100);
  }, [router]);

  return (
    <html lang="en" data-theme="night">
      <head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Scheduler</title>
        <meta
          name="description"
          content="NBA all stars statistics and game records."
        />
        <meta name="keywords" content="NBA, Lebron James, cobe, NBA africa" />
      </head>
      <body className="min-h-screen overscroll-contain">
        <AuthContext.Provider value={userToken}>
          {loading ? <Loader /> : children}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
