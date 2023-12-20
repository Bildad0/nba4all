/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TaskListComponent } from "../task_list";
import CreateTaskForm from "../create_new_task";
import { TaskCardComponent } from "../task_card_list";
import UserActivityChart from "../charts/user_activity_chart";
import DoughnutChart from "../charts/pie_chart";
import { PremiumCard } from "../premium_card";
import ScheduleAnalytics from "../analytics";
import CustomCalendar from "../calender";
import UpcomingTasks from "../upcoming_tasks";

const upcomingTasksData = [
  {
    title: "Meeting with Team",
    details: "Discuss project updates",
    time: "10:00 AM",
    dueTime: "11:30 AM",
    audience: [
      { id: "1", name: "Bildad Owuor", username: "Bildad", imageUrl: "link" },
    ],
  },
  {
    title: "Prepare Presentation",
    details: "Prepare slides for the client meeting",
    time: "2:00 PM",
    dueTime: "3:30 PM",
    audience: [
      { id: "1", name: "Bildad Owuor", username: "Bildad", imageUrl: "link" },
    ],
  },
  // Add more tasks as needed
];

export const DashBoard = () => {
  const handleDateChange = (date: Date) => {
    console.log("Selected date:", date);
  };

  return (
    <div className="tab-content-item" id="dashboard">
      <main className="min-w-full p-5 bg-white mt-3">
        <div className="flex flex-col gap-4 sm:flex-colmn md:flex-row lg:flex-row xl:flex-row justify-between">
          <CreateTaskForm />
          <div className="card-body">
            <h1 className="text-black card-title text-start">Task&apos;s Overview</h1>
            <div className="card bg-slate-200">
              <div className="card-body">
                <DoughnutChart />
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-md flex flex-col gap-10">
            <PremiumCard />
            <div className="card-body">
              <ScheduleAnalytics />
            </div>
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
                <div className="card-body">
                  <h1>Activity graph</h1>
                  <UserActivityChart />
                </div>
              </div>
            </div>
          </div>

          {/* section two second card */}
          <div className="card bg-gray-700 p-3">
            <h1 className="text-white card-title text-start px-5 text-2xl ">
              Today&apos;s Schedules
            </h1>
            <div className="card-body">
              <UpcomingTasks tasks={upcomingTasksData} />
            </div>
          </div>

          {/* calender section */}
          <div className="card bg-white border-none">
            <div className="card-body rounded-md border-none">
              <CustomCalendar onDateChange={handleDateChange} />
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
  );
};

