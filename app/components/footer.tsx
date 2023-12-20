"use client"

import React, { useEffect, useState } from "react";
import { ProfileIcon } from "./profile_drawer";

const Footer = () => {
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
    <div className="high-elevation">
      <footer className="footer py-10 bg-base-200 text-base-content px-20">
        <nav>
          <header className="footer-title uppercase">Usefull links</header>
          <a className="link link-hover">Feedback and Support</a>
          <a className="link link-hover">Your Subscription</a>
          <a className="flex align-center justify-end m-6 btn btn-primary">
            <p className="text-white">Get our Mobile App</p>
          </a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title uppercase">
            Newsletter and blogs
          </header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Subscribe to our blog</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder={user.email}
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <nav>
          <header className="footer-title uppercase">Navigation</header>
          <a className="link link-hover" href="/">
            Dashboard
          </a>
          <a className="link link-hover flex fle-row  gap-3 justify-between align-middle">
          <ProfileIcon user={user} />
          <h3 className="text-center  font-bold py-3">Profile</h3>
          </a>
          
          <a
            className="link link-hover first-letter:uppercase"
            href="/#notification"
          >
            Notifications
          </a>
          <a className="link link-hover" href="">
            Q & A
          </a>
        </nav>
      </footer>
      <aside className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by NBA4ALL</p>
      </aside>
    </div>
  );
};

export default Footer;
