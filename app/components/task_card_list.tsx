import React, { useEffect, useState } from "react";
import { updateTask } from "../api/api";
import Task from "../models/task.model";
import { LoadingIcon } from "./loading";
import { Tasks } from "./task_list";

export const TaskCardComponent = () => {
  const [userTasks, setUserTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Tasks.call(this)
      .then((response) => {
        setUserTasks(response);
        console.log("from task Card, Tasks:", response);
      })
      .finally(() => setLoading(false));
    return;
  }, []);

  const publishTask = async (e: any, task: Task) => {
    e.preventDefault();
    //update task with this id then change publish to true
    setLoading(true);
    updateTask({
      id: task.id,
      task_name: task.task_name,
      task_detail: task.task_detail,
      date: task.date,
      published: true,
      user_id: task.user_id,
    })
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  };

  const deleteTask = async (e: any, task: Task) => {
    e.preventDefaullt();
    setLoading(true);
    //update task function here

    setLoading(false);
  };

  return userTasks.map((tasks, index) => {
    return (
      <div className="card" key={index}>
        {loading == true ? (
          <div className="card-body">
            <LoadingIcon />
          </div>
        ) : (
          <div className="card-body text-black">
            <h1 className="card-title text-black">{tasks?.task_name}</h1>
            <p className="text-black first-letter:uppercase">{tasks?.task_detail}</p>
            <div className="card-actions  flex gap-3 flex-row ">
              <button onClick={(e) => publishTask(e, tasks)} className="btn btn-primary">Publish</button>{" "}
              <button onClick={(e) => deleteTask(e, tasks)} className="btn btn-error">Delete</button>
            </div>
          </div>
        )}
      </div>
    );
  });
};
