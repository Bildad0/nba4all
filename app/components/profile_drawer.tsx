/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import User from "../models/user.model";
import { FcAbout } from "react-icons/fc";

interface ProfileProps {
  user: User;
}

export const ProfileIcon: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="drawer drawer-end max-w-[5%]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className=" drawer-button">
          <h1 className="text-xl text-bold">
            {user.imageUrl == null ? (
              <div className="flex">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full p-1 min-h-content">
                    <span className="text-xs">{user.fname}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="avatar">
                <div className="rounded-full">
                  <img src={user.imageUrl} alt="icon" loading="lazy" />
                </div>
              </div>
            )}
          </h1>
        </label>
      </div>
      <div className="drawer-side high-elevation">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar content here */}
        <div className="menu p-4 min-w-[25%] min-h-full bg-base-200 text-base-content">
          <div className="profile_details px-4 py-5 mx-3 rounded-md  bg-slate-300 min-h-16 flex flex-col justify-center">
            <div className="text-center">
              <div className="avatar">
                <div className="w-8 rounded-full bg-white">
                  <Image src="" alt="icon" width={500} height={200} />
                </div>
              </div>
            </div>
            <div className="shadow-2xl border rounded-md">
              <div className="flex flex-col gap-3 justify-center text-center">
                <label htmlFor="fname">
                  <p className="px-5 text-gray-900 text-xl">
                    {user.fname} {user.sname}
                  </p>
                  <input
                    name="fname"
                    readOnly={true}
                    type="text"
                    id="fname"
                    value={`@${user.username}.`}
                    className="input input-bordered w-full max-w-xs bg-transparent text-start text-gray-700"
                  ></input>
                </label>
                <div className="flex flex-row gap-3">
                  <FcAbout />
                  <h2 className="text-gray-700">Edit</h2>
                </div>
              </div>
              <label htmlFor="fname">
                <p className="px-5 text-gray-500">{user.email}</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
