"use client";
import React, { useEffect, useState } from "react";

export const NavBar = [
  { title: "Home", icon: "", link: "/" },
  {
    title: "Messages",
    icon: "",
    link: "/messages",
  },
  { title: "Notifications", icon: "", link: "/notifications" },
  { title: "Settings", icon: "", link: "/settings" },
];

export const SideBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(currentScrollPos != 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fade-container low-elevation  bg-white py-8 my-5 ${
        isVisible ? "visible-container" : "hidden-container"
      }`}
    >
      <div className="min-w-content h-[80vh]  min-h-fit rounded-md  justify-center sticky top-10  mx-5 my-20 bg-transparent -200 rounded-border hidden xs:hidden sm:hidden md:flex lg:flex xl:flex border-spacing-4 ">
        <div className="flex flex-col text-sm justify-around tubs">
          <ul className="flex flex-col  text-sm justify-center px-6 list-none gap-3">
            <li className="text-start flex justify-center">
              <h1 className="text-start py-auto text-3xl font-mono font-bold">Navigation</h1>
            </li>
            {NavBar.map((nav, index) => {
              return (
                <li key={index} className="py-6 m-2 font-mono font-semibold ">
                  <a
                    className="rounded-full text-gray-600 p-3 text-xl font-bold  gap-5 active_link hover:text-blue-700 hover:underline"
                    href={nav.link}
                  >
                    {nav.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
