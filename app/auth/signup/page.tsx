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
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleForm = async (e: any) => {
    e.preventDefault();

    setIsLoading(!isLoading);
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

    setIsLoading(false);
    //return to home page
    return router.push("/");
  };

  return (
    <div className="container bg-black px-4 py-4 sm:px-4 sm-py-4  md:px-8 md:py-40 lg:px-8 lg:py-14 flex justify-center  mx-auto">
      <div className="card lg:card-side bg-base-100 shadow-xl h-3/4">
        <Image
          src="/images/cobe.jpg"
          className="hidden rounded-box w-full  sm:hidden md:flex lg:flex xl:flex xxl:flex sm:w-full  md:w-10/12 lg:w-10/12 xl:w-10/12 xxl:w-10/12"
          height={200}
          width={300}
          alt={""}
        />
        <div className="card-body px-4 w-full bg-[url('/images/signup_side_image.jpg')] bg-no-repeat bg-cover  sm:bg-[url('/images/lebron_james_2.jpg')] md:bg-none lg:bg-none xl:bg-none ">
          <h2 className="card-title self-center text-success underline">
            Create Account
          </h2>
          <p className="self-center text-white text-center">
            Please sign up to get all time NBA stats of your favourite player
          </p>
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
            {isLoading ? (
              <span className="loading loading-dots loading-lg text-success align-baseline"></span>
            ) : (
              <button type="submit" className="btn btn-outline">
                Create account
              </button>
            )}
          </form>
          <h3 className="flex justify-center">
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
          <hr className="bg-blue" />
          <h2 className="flex justify-center text-center text-success font-extrabold text-lg">
            OR
          </h2>
          <hr className="bg-blue" />
          {/* TODO!:add google Icon, twitter icon or github icon then add user signup with these social media accounts */}
          <div className="flex flex-column sm:flex-column md:flex-row lg:flex-row xl:flex-row gap-3 justify-around px-4">
            <button className="btn btn-link">
              <span>Use google</span>
            </button>
            <button className="btn btn-link">
              <span>Use github</span>
            </button>
            <button className="btn btn-link">
              <span>use twitter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
