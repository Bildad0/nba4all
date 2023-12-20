"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { getUserByEmail, userProfile } from "../api/api";
import signin from "../api/firebase/signin";

const showModule = (errorMessage: any) => {
  return <div></div>;
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      const { result, error } = await signin(email, password);
      if (error) {
        //add notification popup
        console.log("login firebase error: ", "Network error");
        setLoading(false);
        showModule("Please check your internet connection then try again.");

        // for offline development
        router.back();
        return;
      }
      //store user token for session
      console.log("Firebase result: ", result);
      getUserByEmail(result?.email || "ireen@gmail.com")
        .then((response: any) => {
          console.log("user: ", response.data[0]);
          if (window.localStorage)
            window.localStorage.setItem(
              "user",
              JSON.stringify(response.data[0] || "")
            );
          if (response.message) {
            showModule(response.message);
            console.log("user from Db error:", response.message);
            return router.push("/updateProfile");
          }
        })
        .finally(async () => {
          const currentUser = await JSON.parse(
            window.localStorage.getItem("user") || ""
          );
          const profile = await userProfile(currentUser.user_id);
          if (window.localStorage)
            window.localStorage.setItem(
              "userProfile",
              JSON.stringify(profile.data || "")
            );

          setLoading(!loading);
        });
      //return to home page
      return router.back();
    }, 200);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-stretch flex-col gap-3 min-w-[35vh]"
    >
      <label htmlFor="email" className="py-4">
        <p className="py-3 text-2xl">Email:</p>
        <input
          name="email"
          required
          type="email"
          id="email"
          placeholder="example@mail.com"
          className="input input-bordered w-full max-wxs"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="text-red-900 py-3 font-bold">Error Message</p>
      </label>
      <label htmlFor="password" className="py-4">
        <p className="py-3 text-2xl">Password:</p>
        <input
          name="password"
          required
          type="password"
          id="password"
          className="input input-bordered w-full max-wxs"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="text-red-900 py-3 font-bold">Error Message</p>
      </label>
      <div className="card-actions justify-center ">
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : (
          <button
            type="submit"
            className="btn btn-outline hover:bg-white hover:text-black justify-stretch"
          >
            Login
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
