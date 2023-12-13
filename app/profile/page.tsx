"use client"
import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ProfileDetails from "../components/profile";

export default function userProfile() {
  return (
    <div className="min-h-screen min-w-full">
      <Header />
      <main>
        <div>
          <ProfileDetails />
        </div>
      </main>
      <Footer />
    </div>
  );
}
