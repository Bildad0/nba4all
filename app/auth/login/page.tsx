"use client";

import React from "react";
import signin from "@/app/api/firebase/signin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import Loader from "@/app/components/loading";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
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
      <div className="px-12 py-6 flex justify-center">
        <div className="card card-side bg-base-100 shadow-xl w-fit h-fit">         
          <div className="card-body h-fit w-10/12 justify-center py-4">
            <h2 className="card-title">Sign In</h2>
            <form onSubmit={handleSubmit} className="flex justify-around flex-col gap-3">
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
              <div className="card-actions justify-center">
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  <button type="submit" className="btn btn-outline hover:bg-white hover:text-black">
                    Login
                  </button>
                )}
              </div>
            </form>
            <div>
            <h3 className="flex justify-center">
            Don`t have account{" "}
            <span>
              <button
                onClick={() => router.push("/auth/login")}
                className="btn btn-active btn-link"
              >
                create one
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
            <span className="btn btn-link">
              <FcGoogle className="text-2xl" />
            </span>

            <span className="btn btn-link">
              <GrGithub className="text-2xl text-white" />
            </span>

            <span className="btn btn-link">
              <RiTwitterXFill className="text-2xl text-blue-400" />
            </span>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
