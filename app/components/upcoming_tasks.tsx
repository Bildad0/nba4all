/* eslint-disable @next/next/no-img-element */
// components/UpcomingTasks.tsx
import React from "react";

interface Task {
  title: string;
  details: string;
  time: string;
  dueTime: string;
  audience: [
    {
      id: string;
      name: string;
      username: string;
      imageUrl: string;
    }
  ];
}

const taskDueTime = (date: Date) => {
  const currentTime = new Date(date.getTime());
  console.log("current Time:", currentTime);
  return currentTime;
};
interface UpcomingTasksProps {
  tasks: Task[];
}

const UpcomingTasks: React.FC<UpcomingTasksProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          key={index}
          className="bg-white rounded-lg p-2 my-2 flex flex-row justify-between gap-5"
        >
          <div className="flex flex-col">
          <img src={task.time || ""} alt="icon" loading="lazy" className="rounded-full bg-gray-200 min-w-[2vh] min-h-[2vh] justify-start" />
          <div className=""></div>
          </div>
    
          <div className="flex flex-col justify-between gap-2">
            <h1 className="text-black">{task.title || "Task Title"}</h1>
            <p className="text-gray-400">{task.details || "Task details"}</p>
          </div>
          <div className="justify-end text-gray-800">
            <h1>{task.dueTime || "12:30 PM"}</h1>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UpcomingTasks;
