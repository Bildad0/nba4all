"use client"

import './globals.css'
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import firebase_app from '@/firebase/config';
import React from 'react';
import { useRouter } from 'next/navigation';


const auth = getAuth(firebase_app); 

export const AuthContext = React.createContext({});

export const useAuthContext =()=> React.useContext(AuthContext);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  React.useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
            setUser(user);
        }else{
            router.push("/auth/signup")
        }
        setLoading(false);
    });
    return ()=> unsubscribe();
},[router]);

  return (
    <html lang="en">
      <head>
        {/* Add head meta data */}
      </head>
      <body>
      <AuthContext.Provider value={{user}}>
            {loading ? <div className='bg-black text-center px-8 py-8'>
            <span className="loading loading-dots loading-lg"></span>
            </div> : children}
        </AuthContext.Provider>
        </body>
    </html>
  )
}
