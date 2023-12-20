/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import LoginForm from "@/app/components/login_form";

function Page() {
  const router = useRouter();

  return (
    <div className="container bg-black min-w-full min-h-[100vh]">
      <div className="p-20 flex flex-row justify-between gap-3">
        <div className="card text-gray-500 text-start  w-[35%]">
          <h1 className="card-title text-start font-sans text-6xl font-bold p-5">
            Welcome Back !
          </h1>
          <div className="card-body py-4 justify-start gap-4">
            <img src="/images/side_view_1.jpg" alt="logo" loading="lazy" className="rounded-md" />
            <p className="text-gray-300 text-2xl font-bold">
              Login to your account to continue with your schedules.
            </p>
            <div>
              <p className="uppercase text-center text-xl font-bold font-mono text-gray-100">
                Or 
              </p>
              {/* TODO!:add google Icon, twitter icon or github icon then add user signup with these social media accounts */}
              <div className="flex flex-column sm:flex-column md:flex-row lg:flex-row xl:flex-row gap-3 justify-around p-4">
                <span className="btn btn-link p-2">
                  <FcGoogle className="text-4xl" />
                </span>

                <span className="btn btn-link p-2">
                  <GrGithub className="text-4xl text-white" />
                </span>

                <span className="btn btn-link p-2">
                  <RiTwitterXFill className="text-4xl text-blue-400" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-gray-900 shadow-xl w-fit h-fit rounded-md py-auto">
          <h2 className="card-title p-3 text-3xl font-bold first-letter:font-extralight text-center">
            Sign In
          </h2>
          <div className="card-body bg-base-200 justify-center py-4 rounded-md">
            <div className="p-8">
              <LoginForm />
            </div>
            <div className="py-3">
              <h3 className="flex justify-center">
                Don`t have account ?
                <span
                  className="btn-active btn-link px-2 "
                  onClick={() => router.push("/auth/signup")}
                >
                  create one
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Page;
