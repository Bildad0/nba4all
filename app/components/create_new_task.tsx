"use client";
import React, { useState } from "react";
import { createNewTask } from "../api/api";
import Task from "../models/task.model";
import { FcApprove } from "react-icons/fc";

const CreateTaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const initialDate = Date.UTC(Date.now());

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
        task_name: title,
        task_detail: description,
        date: date || `${initialDate}`,
        published: false,
        user_id: user.id,
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
        task_name: title,
        task_detail: description,
        date: date || `${initialDate}`,
        published: true,
        user_id: user.id,
      };
      createNewTask(task);
    }, 200);
    setLoading(false);
  };

  return (
    <div className="rounded-lg bg-orange-400 px-6 py-2 shadow-2xl">
      <p className="text-3xl text-white">
        Create new Task{" "}
        <span>
          <FcApprove className="text-blue" />
        </span>
      </p>
      <form onSubmit={handleSubmit} className="flex  flex-col gap-3">
        <label htmlFor="title">
          <p>Title</p>
          <input
            name="title"
            type="text"
            required
            id="title"
            className="pl-2 rounded-sm"
            placeholder={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </label>
        <label htmlFor="details">
          <p>Description</p>
          <textarea
            required
            name="details"
            id="details"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </label>
        <label htmlFor="date">
          <p>Due date</p>
          <input
            name="date"
            type="date"
            placeholder={initialDate.toString()}
            id="date"
            className="px-5"
            onSelect={(e) => {
              setDate(e.currentTarget.value);
            }}
          ></input>
        </label>
        <div>
          {loading == true ? (
            <button type="submit" className="disabled">
              {<span className="loading loading-spinner loading-md"></span>}
            </button>
          ) : (
            <div className="flex flex-row gap-3">
              <button
                type="submit"
                className="btn btn-outline hover:bg-white hover:text-black"
              >
                Save
              </button>
              <button
                onClick={handlePublish}
                className="btn btn-outline hover:bg-white hover:text-black"
              >
                Publish
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateTaskForm;
