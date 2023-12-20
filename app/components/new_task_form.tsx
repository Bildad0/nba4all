import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { createNewTask } from "../api/api";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const initialDate = new Date();

  const onDateSelect = async (e: any) => {
    //TODO:look for date selector function !
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (user == null) {
      return;
    }
    setTimeout(() => {
      const task = {
        title: type || "task",
        task_name: title,
        task_detail: description,
        date: date || `${initialDate}`,
        published: false,
        user_id: user.id,
        audience_id: user.id || 2, //ToDo:set guest or friend's id
      };
      createNewTask(task);
    }, 200);
    setLoading(false);
  };

  const handlePublish = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (user == null) {
      return;
    }
    setTimeout(() => {
      const task = {
        title: type || "task",
        task_name: title,
        task_detail: description,
        date: date || `${initialDate}`,
        published: true,
        user_id: user.id,
        audience_id: user.id || 2, //ToDo:set guests or friend's id
      };
      createNewTask(task);
    }, 200);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex  flex-col gap-3 px-8">
      <div className="flex flex-row justify-between text-center">
        <p className="text-3xl text-white p-3 m-8">Create a new Schedule</p>
      </div>
      <div className="card-body bg-slate-400 rounded-md">
        <label htmlFor="type">
          <h2 className="text-white px-3 py-1 text-xl">Shedule type:</h2>
          <select
            id="type"
            name="type"
            aria-readonly
            className="w-[95%] p-2 rounded-md"
            onChange={(e) => {
              //TODO: get value at selected index
            }}
          >
            <option value=""></option>
            <option value="task" className="py-3  text-xl">
              Task
            </option>
            <option value="meeting" className="py-3 text-xl">
              Meeting
            </option>
            <option value="reminder" className="py-3 text-xl">
              Reminder
            </option>
          </select>
        </label>
        <label htmlFor="title">
          <h2 className="text-white px-3 py-1 text-xl">Title:</h2>
          <input
            name="title"
            type="text"
            required
            id="title"
            className="input input-bordered input-primary input-md w-full max-w-xs"
            placeholder={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="details">
          <h2 className="text-white px-3 py-1 text-xl">Description:</h2>
          <textarea
            required
            name="details"
            id="details"
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>
        <label htmlFor="date">
          <h2 className="text-white px-3 py-1 text-xl">Due date: </h2>
          <input
            name="date"
            type="date"
            placeholder={initialDate.toString()}
            id="date"
            className="input input-bordered input-primary input-md w-full max-w-xs"
            onSelect={(e) => {
              setDate(e.currentTarget.value);
            }}
          ></input>
        </label>
        <div className="py-5">
          {loading == true ? (
            <button type="submit" className="disabled">
              {<span className="loading loading-spinner loading-md"></span>}
            </button>
          ) : (
            <div className="flex flex-row gap-3 justify-between">
              <button
                type="submit"
                className="btn border-none hover:bg-white hover:text-black  bg-transparent text-green-300"
              >
                Save
              </button>
              <button
                onClick={handlePublish}
                className="btn btn-outline hover:bg-white hover:text-black bg-black text-white"
              >
                Publish
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};
