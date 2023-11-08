/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import signup from "@/firebase/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");

  const router = useRouter();

  const handleForm = async (e: any) => {
    e.preventDefault();

    //validation
    if (password == null && repeatpassword == null) {
      return console.log("password is required");
    } else if (password != repeatpassword) {
      return console.log("password doesn't match");
    }
    const { result, error } = await signup(email, password);

    if (error) {
      //add a notification popup
      return console.log("Firebase error: ", error);
    }

    //store the data for localStorage or session storage
    console.log("Firebase result:", result);

    //return to home page
    return router.push("/");
  };

  return (
    <div className="container bg-black px-4 py-4 sm:px-4 sm-py-4  md:px-40 md:py-40 lg:px-14 lg:py-14 flex justify-center h-full mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl h-full">
            <Image
              src="/images/cobe.jpg"
              className="rounded-box w-full"
              height={400}
              width={200}
              alt={""}
            />
        <div className="card-body px-4 w-full">
          <h2 className="card-title self-center">Create an Account</h2>
          <form
            onSubmit={handleForm}
            className="grid grid-row-4 gap-4 content-between"
          >
            <label htmlFor="email">
              <p className="py-3">Email</p>
              <input
                name="email"
                required
                type="email"
                id="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>

            <label htmlFor="password">
              <p className="py-3">Password</p>
              <input
                name="password"
                required
                type="password"
                id="password"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>

            <label htmlFor="password2">
              <p className="py-3">Repeat Password</p>
              <input
                name="password2"
                required
                type="password"
                id="password2"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setRepeatpassword(e.target.value)}
              ></input>
            </label>

            <button type="submit" className="btn btn-outline">
              Sign up
            </button>
          </form>
          <h3>
            Already have an account{" "}
            <span>
              <button
                onClick={() => router.push("/auth/login")}
                className="btn btn-active btn-link"
              >
                LogIn
              </button>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Page;
