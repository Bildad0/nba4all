"use client";
import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
import UpcomingTasks from "./upcoming_tasks";
import { Form } from "./new_task_form";
import { IoClose } from "react-icons/io5";

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
];

const CreateTaskForm = () => {
  return (
    <div className=" w-[50vh] bg-white flex gap-20 flex-col">
      <div
        className="rounded-lg bg-gray-400 p-2 shadow-2xl  flex flex-col"
        onClick={() => document.getElementById("my_modal_5")?.showModal()}
      >
        <div className="flex flex-row justify-center text-center gap-3 px-10 py-5">
          <div className="w-fit h-fit bg-gray-800 rounded-full flex">
            <MdAddCircleOutline className="text-6xl text-white" />
          </div>
          <h3 className="text-start text-gray-900 text-3xl py-3 ">
            New Schedule
          </h3>
        </div>
        <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle text-start"
      >
        <div className="modal-box bg-slate-700">
        <form method="dialog">
          <button className="btn justify-end">
            <IoClose className="text-white text-2xl" />
          </button>
        </form>
        <Form />
        </div>
      </dialog>
      </div>
      <div className="rounded-md bg-white p-3">
        <div className="card bg-white">
          <h1 className="text-green-800 card-title py-2 m-5  underline px-auto justify-center text-2xl">
            Upcoming Meetings
          </h1>
          <div className="bg-gray-300 rounded-md p-2">
            <UpcomingTasks tasks={upcomingTasksData} />
          </div>
        </div>
      </div>
    </div>
  );
};



export default CreateTaskForm;
