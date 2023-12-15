import React, { useEffect, useState } from "react";
import { fetchAllTasks, updateTask } from "../api/api";
import Image from "next/image";
import { FcApprove } from "react-icons/fc";
import { useRouter } from "next/navigation";
import CreateTaskForm from "./create_new_task";
import Task from "../models/task.model";
import { env } from "node:process";

//will name it as TasksCard
const TaskCard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const route = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    if (user == null) {
      return;
    }
    fetchAllTasks(user.id).then((res) => {
      setTasks(res.data);
    });
  });

  const handleTaskView = (id: any) => {
    route.push(`tasks/?${id}`);
  };

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
      user_id:task.user_id
    })
      .then((res) => console.log(res))
      .finally(() => setLoading(false));
  };
  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-5 text-center justify-center">
      {tasks.length == 0 ? (
        <div className="text-center">
          <div className="justify-center flex flex-row">
            <CreateTaskForm />
          </div>
        </div>
      ) : (
        tasks.map(function (task: Task, index) {
          return (
            <div className="card w-80 glass low-elevation" key={index}>
              <div className="card-body">
                <h2 className="card-title">
                  {task.id} {task.task_name}
                </h2>
                <p className="text-start first-letter:text-3xl first-letter:font-semibold">
                  {task.task_detail}
                </p>

                <div className=" py-10 justify-start text-start">
                  <p className="text-lime-600">{task.date.toString()}</p>
                </div>
                <div className="card-actions justify-end">
                  {task.published == true ? (
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleTaskView(task.id)}
                    >
                      View
                    </button>
                  ) : (
                    <div className="flex flex-row gap-3">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => handleTaskView(task.id)}
                      >
                        View
                      </button>
                      {loading == true ? (
                        <button className="btn btn-primary disabled">
                          Loading...
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={(e) => publishTask(e, task)}
                        >
                          Publish
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default TaskCard;
