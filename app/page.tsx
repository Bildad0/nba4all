/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useAuthContext } from "./layout";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import CreateTaskForm from "./components/create_new_task";
import { TaskListComponent } from "./components/task_list";
import { TaskCardComponent } from "./components/task_card_list";
import { ProfileIcon } from "./components/profile_drawer";

export default function Home() {
  const user = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (user == null) {
      router.push("/auth/login");
    }
  }, [router, user]);

  return (
    <div data-theme="dark" className="min-h-screen min-w-full">
      <Header />
      <div className="flex flex-row h-[100%] bg-white">
        <div className="min-w-content bg-base-200 justify-between low-elevation rounded-border hidden xs:hidden sm:hidden md:flex lg:flex xl:flex border-spacing-4 ">
          <div className="tabs flex flex-col text-sm justify-between tubs">
            <a className="flex align-top justify-start bg-transparent text-white">
              <div className=" card ">
                <div className="card-body">
                  <img
                    src=""
                    height={20}
                    width={30}
                    alt="Logo"
                    loading="lazy"
                  />
                </div>
              </div>
            </a>

            <div className="tabs flex flex-col sticky  top-0 text-sm justify-center px-8">
              <a className="tab tab-lifted text-white p-10" href="#dashboard">
                DashBoard
              </a>
              <a className="tab tab-lifted p-10" href="#schedules">
                Schedules
              </a>
              <a className="tab tab-lifted p-10" href="#messages">
                Messages
              </a>
              <a className="tab tab-lifted p-10" href="#notification">
                Notifications
              </a>
              <a className="tab tab-lifted p-10 " href="#settings">
                Settings
              </a>
            </div>
            <a className="flex align-bottom justify-end bg-transparent">
              <div className=" card ">
                <div className="card-body">
                  <p className="text-white btn btn-primary">
                    Get our Mobile App
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="w-[100%] bg-white">
          <div className="tab-content min-h-content min-w-[100%]">
            <div className="tab-content-item" id="dashboard">
              <div className=" invisible sm:invisible md:visible lg:visible xl:visible xxl:visible flex justify-end py-4 px-5 sticky top-12 bg-white high-elevation ">
                <div className="flex flex-row gap-8">
                  <form className="flex flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Search input"
                      className="p-3 text-gray-700 bg-gray-100 rounded-md"
                    ></input>
                    <button
                      type="submit"
                      className="text-black text-xl rounded-md font-light p-3 hover:text-white hover:bg-black hover:border-gray-500"
                    >
                      Search
                    </button>
                  </form>
                  <div className="text-black">Icon</div>
                </div>
              </div>
              <main className="min-w-full p-5 bg-white">
                <div className="flex flex-col gap-4 sm:flex-colmn md:flex-row lg:flex-row xl:flex-row justify-between">
                  <CreateTaskForm />
                  <CreateTaskForm />
                  <div className="card bg-slate-600 w-1/2 text-white">
                    <p className="text-center"> Hi</p>
                  </div>
                </div>
                <div className="flex flrex-row justify-between py-10 gap-3">
                  {/* section two first card */}
                  <div className="card bg-transparent ">
                    <div className="card-body">
                      <h1 className="text-black card-title text-start">
                        Weekly activity
                      </h1>
                      <div className="card bg-slate-200">
                        <div className="card-body">weekly activity Graph</div>
                      </div>
                    </div>
                  </div>

                  {/* section two second card */}
                  <div className="card bg-gray-700 ">
                    <div className="card-body">
                      <h1 className="text-white card-title text-start">
                        Upcoming Meetings
                      </h1>
                      <div className="card">
                        <div className="card-body">
                          <ul>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* calender section */}
                  <div className="card bg-gray-300 border-radii">
                    <div className="card-body">
                      <h1 className="card-title text-black">
                        {" "}
                        Calender / date selector
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row row-auto gap-3 justify-between">
                  <div className="row-span-4 min-w-[75%]">
                    <div className="card bg-gray-700 border-radii p-3 ">
                      <h1 className="card-title text-white px-8 font-semibold">
                        Your Appointments
                      </h1>
                      <div className="card-body">
                        <ul className="list-none list-item gap-2">
                          <TaskListComponent />
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className=" row-span-2 min-w-[20%]">
                    <div className="card bg-gray-400 border-radii p-3">
                      <h1 className="card-title text-gray-300 justify-center">
                        Pending Tasks
                      </h1>
                      <div className="card-body">
                        <TaskCardComponent />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            <div className="tab-content-item" id="schedules">
              <main className="bg-black p-6">
                <p className="text-white">Schedules</p>
              </main>
            </div>
            <div className="tab-content-item" id="messages">
              <p>Messages</p>
            </div>
            <div className="tab-content-item" id="notification">
              <main>
                <p>Notifications</p>
              </main>
            </div>
            <div className="tab-content-item" id="settings">
              <main>
                <p>Settings</p>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
