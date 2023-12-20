"use client";
import React, { useEffect, useState } from "react";
import { ProfileIcon } from "./profile_drawer";
import { NavBar } from "./side_bar";

export const Greetings = () => {
  const today = new Date();
  const time = today.getHours();
  if (time < 12) {
    return "Good Morning";
  } else if (time >= 12 && time < 14) {
    return "Good Afternoon";
  } else if (time >= 14 && time < 19) {
    return "Good Evening";
  } else return "Good Night";
};

const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "");
    if (currentUser === null) {
      //return a notification error message then navigate to login page
      console.log("User not found");
    }
    setUser(currentUser);
  }, []);

  return (
    <div className="navbar bg-base-100 z-50 high-elevation min-w-[100%] sticky top-0   min-h-[20%]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* add logo here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavBar.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {user == null ? (
          <a className="btn btn-ghost text-xl flex-wrap whitespace-break-spaces">
            Task Manager
          </a>
        ) : (
          <a className="btn btn-ghost text-xl">
            <Greetings />, {user?.fname} {user?.lname}
          </a>
        )}
      </div>
      <div className="navbar-end">
        <ProfileIcon user={user} />
      </div>
    </div>
  );
};

export default Header;
