import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0">
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
              <a>Tournaments</a>
            </li>
            <li>
              <a>Games</a>
              <ul className="p-2">
                <li>
                  <a>All Games</a>
                </li> 
                <li>
                  <a>Stats</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Players</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NBA4ALL</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Tournaments</a>
          </li>
          <li tabIndex={0}>
            <details>
              <summary>Games</summary>
              <ul className="p-2">
                <li>
                  <a>All Games</a>
                </li>
                <li>
                  <a>Stats</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Players</a>
          </li>
          <li>
            <a>Blogs</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex flex-row justify-between">
        <Avator />
        </div>
        {/* if user icon url is available then use this avator */}
        {/* <div className="avatar">
          <div className="w-8 rounded-full">
            <img
              src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="icon"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Header;

const Avator = () => {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral text-neutral-content rounded-full w-8">
        <span className="text-xs">BA</span>
      </div>
    </div>
  );
};
