import React from "react";

const Footer = () => {
  return (
    <div className="high-elevation">
      <footer className="footer py-10 bg-base-200 text-base-content px-20">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Game updates</a>
          <a className="link link-hover">Game statistics</a>
          <a className="link link-hover">Player profile</a>
          <a className="link link-hover">League statistics and fixtures</a>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <header className="footer-title">Newsletter and blogs</header>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
        <nav>
          <header className="footer-title">Links</header>
          <a className="link link-hover" href="/">Home</a>
          <a className="link link-hover" href="/profile">Profile</a>
          <a className="link link-hover" href="">Your Subscription</a>
          <a className="link link-hover" href="">Q & A</a>
        </nav>

      </footer>
      <aside className="footer footer-center p-4 bg-base-300 text-base-content">
        <p>Copyright © 2023 - All right reserved by NBA4ALL</p>
      </aside>
    </div>
  );
};

export default Footer;
