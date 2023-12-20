/* eslint-disable @next/next/no-img-element */

"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotifications } from "react-icons/md";
import { NavBar } from "./side_bar";

export const SmallHeader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos <= 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fade-container medium-elevation  ${
        isVisible ? "visible-container" : "hidden-container"
      }`}
    >
      <div className=" flex  py-4 px-5  bg-blue-100 shadow-xl flex-row justify-between">
        <div className="flex justify-start">
          <a href="/" className="sticky top-2">
            <img
              src=""
              alt="logo"
              className="rounded-full bg-gray-200 min-h-[5vh] min-w-[5vh]"
              loading="lazy"
            />
          </a>
        </div>
        <div className="justify-center">
          <ul className="flex flex-row gap-3 justify-center py-auto">
            {NavBar.map((nav, index) => {
              return (
                <li className="text-gray-600 font-mono font-semibold p-2 rounded-full  hover:bg-slate-500 hover:text-white" key={index}>
                  <a href={nav.link}>{nav.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-row gap-8 justify-end">
          <form className="flex flex-row gap-3">
            <input
              type="text"
              placeholder="Search input"
              className="p-3 text-gray-700 bg-white rounded-md  min-w-[30vh]"
            ></input>
            <button
              type="submit"
              className="rounded-full font-light p-3 hover:bg-blue-200 hover:text-white min-w-content"
            >
              <CiSearch className="text-3xl text-blue-900  hover:text-white " />
            </button>
          </form>
          <div className="text-black rounded-full hover:bg-gray-500 p-3">
            <MdOutlineNotifications className="text-4xl text-blue-900 hover:text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
