"use client";

import "./globals.css";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebase_app from "@/firebase/config";
import React from "react";
import { useRouter } from "next/navigation";

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext({});

export const useAuthContext = () => React.useContext(AuthContext);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  React.useEffect(() => {
    setTimeout(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          console.log(user);
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
      <head>{/* Add head meta data */}</head>
      <body className="min-h-screen">
        <AuthContext.Provider value={{ user }}>
          {loading ? (
            <div className="px-8 flex justify-center">
              <p className="text-center py-10 text-white text-xl font-mono antialiased italic gap-3">
                <span className="loading loading-dots loading-lg text-success align-baseline"></span>
              </p>
            </div>
          ) : (
            children
          )}
        </AuthContext.Provider>
      </body>
    </html>
  );
}
