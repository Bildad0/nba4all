import React, { useEffect, useState } from "react";
import Image from "next/image";

export const User = async () => {
  const currentUser = await JSON.parse(
    window.localStorage.getItem("user") || ""
  );
  return currentUser;
};

export const ProfileIcon = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    User.call(this)
      .then((response) => setUser(response))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="drawer drawer-end max-w-[10%]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="flex flex-row gap-3 drawer-button"
        >
          {" "}
          <Avator /> <h1 className="text-white text-xl text-bold">{user?.username}</h1>
        </label>
      </div>
      <div className="drawer-side high-elevation">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 min-w-[20%] min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Avator = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    User.call(this)
      .then((response) => setUser(response))
      .finally(() => setLoading(false));
  }, []);
  return user.profileUrl == null ? (
    <div className="flex flex-row justify-between">
      <div className="avatar placeholder">
        <button className="bg-neutral text-neutral-content rounded-full">
          <span className="text-xs">{user.fname}</span>
        </button>
      </div>
    </div>
  ) : (
    <div className="avatar">
      <div className="rounded-full">
        <Image src={user.profileUrl} alt="icon" />
      </div>
    </div>
  );
};
