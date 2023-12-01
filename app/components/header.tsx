import Image from "next/image";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUser = JSON.parse(localStorage.getItem("user") || "");
      setUser(currentUser);
    }
  }, []);
  return (
    <div className="navbar bg-base-100 sticky top-0 shadow-2xl z-50">
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
            <li>
              <a href="/tasks/new">New Task</a>
            </li>
            <li>
              <a>Unpublised Tasks</a>
            </li>
            <li>
              <a>Completed Tasks</a>
            </li>
            <li>
              <a></a>
            </li>
          </ul>
        </div>
        {user == null ? (
          <a className="btn btn-ghost text-xl">
            Task Manager
          </a>
        ) : (
          <a className="btn btn-ghost text-xl">
            Hello, {user?.fname} {user?.lname}
          </a>
        )}
      </div>
      <div className="navbar-end">
        {user.profileUrl == null ? (
          <div className="flex flex-row justify-between">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-8">
                <span className="text-xs">{user.fname}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="avatar">
            <div className="w-8 rounded-full">
              <Image src={user.profileUrl} alt="icon" />
            </div>
          </div>
        )}

        {/* if user icon url is available then use this avator */}
      </div>
    </div>
  );
};

export default Header;
