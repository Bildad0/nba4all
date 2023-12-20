/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import signup from "@/app/api/firebase/signup";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Loader from "@/app/components/loading";
import { getUserByEmail } from "@/app/api/api";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [repeatPasswordError, setRepeatPasswordError] = useState("");

  const router = useRouter();

  const handleOnChange = async () => {
    setEmailError("");
    const emailRegex =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (password == null && repeatPassword == null) {
      setPasswordError("Password is required");
    } else if (password != repeatPassword) {
      setRepeatPasswordError("Password doesn't match");
    } else if (email.match(emailRegex) === null) {
      setEmailError("Email doesn't exist");
    } else if (email.match(emailRegex) != null) {
      getUserByEmail(email).then((response: any) => {
        if (response.data[0]) {
          console.log("user from signup:", response.data[0]);
          setEmailError("User whith this email already exists.");
        }
      });
    } else if (!email) {
      setEmailError("Email is required.");
    }
    setPasswordError("");
    setRepeatPasswordError("");
  };
  const handleForm = async () => {
    setIsLoading(!isLoading);
    //validation
    const { result, error } = await signup(email, password);
    if (error) {
      //TODO:add a notification popup
      return console.log("Firebase error: ", error);
    }
    //store the data for localStorage or session storage
    console.log("Firebase result:", result);

    setIsLoading(false);
    result;
    localStorage.setItem("", JSON.stringify(result));
    //return to home page
    router.push("/");
    return;
  };

  return (
    <main className="container  rounded-md bg-black px-4  flex justify-center  mx-auto min-w-full min-h-[100vh]">
      <div className="card lg:card-side bg-base-100 shadow-xl h-fit my-auto">
        <Image
          src="/images/side_view_1.jpg"
          className="hidden rounded-md w-full  sm:hidden md:flex lg:flex xl:flex xxl:flex sm:w-full  md:w-10/12 lg:w-10/12 xl:w-10/12 xxl:w-10/12 p-6"
          height={200}
          width={500}
          alt={""}
        />
        <div className="card-body px-4 w-full bg-[url('/images/side_view_1.jpg')] bg-no-repeat bg-cover  sm:bg-[url('/images/lebron_james_2.jpg')] md:bg-none lg:bg-none xl:bg-none ">
          <h2 className="card-title self-center text-success">
            Create Account
          </h2>
          <p className="self-center text-white/30 tracking-wide text-center">
            Plan your tasks and schedule them for a reminder.
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
                autoFocus
                autoComplete="false"
                type="email"
                id="email"
                placeholder="example@mail.com"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setEmail(e.target.value);
                  handleOnChange();
                }}
              ></input>
              <p className="text-red-900 py-3 font-bold">{emailError}</p>
            </label>

            <label htmlFor="password">
              <p className="py-3">Password</p>
              <input
                name="password"
                required
                autoComplete="false"
                type="password"
                id="password"
                placeholder=""
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => {
                  setPassword(e.target.value);
                  handleOnChange();
                }}
              ></input>
              <p className="text-red-900 py-3 font-bold">{passwordError}</p>
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
                onChange={(e) => {
                  setRepeatPassword(e.target.value);
                  handleOnChange();
                }}
              ></input>
              <p className="text-red-900 py-3 font-bold">{repeatPasswordError}</p>
            </label>
            <div className="card-actions justify-center">
            {isLoading ? (
              <span className="loading loading-spinner loading-md"></span>
            ) : (
              <button
                type="submit"
                className={`btn btn-outline w-1/2 justify-self-center ${emailError !=null? "disabled":"flex"}` }
              >
                Create account
              </button>
            )}
            </div>
         
          </form>
          <h3 className="flex justify-center">
            Already have an account
            <span
              onClick={() => router.push("/auth/login")}
              className="btn-active btn-link px-3"
            >
              Log in
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
              <FcGoogle className="text-3xl font-bold" />
            </span>

            <span className="btn btn-link">
              <GrGithub className="text-3xl font-bold text-white" />
            </span>

            <span className="btn btn-link">
              <RiTwitterXFill className="text-3xl font-bold text-blue-400" />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
