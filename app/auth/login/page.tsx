"use client";

import React from "react";
import signin from "@/firebase/signin";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(loading);
    const { result, error } = await signin(email, password);

    if (error) {
      //add notification popup
      return console.log("Firebase Error:", error);
    }
    //store user token for session
    console.log("Firebase result: ", result);

    setLoading(false);
    //return to home page
    return router.push("/");
  };

  return (
    <div className="container bg-black">
      <div className="px-12 py-6">
        <form onSubmit={handleSubmit} className="flex justify-around">
          <label htmlFor="email">
            <p>Email</p>
            <input
              name="email"
              required
              type="email"
              id="email"
              placeholder="example@mail.com"
              className="input input-bordered w-full max-wxs"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              name="password"
              required
              type="password"
              id="password"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          {loading ? (
            <button type="submit" className="btn btn-disabled">
              Login
            </button>
          ) : (
            <button type="submit" className="btn btn-outline">
              Login
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Page;
