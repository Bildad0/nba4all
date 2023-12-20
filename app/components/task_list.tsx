import React, { useEffect, useState } from "react";

export const Tasks = async () => {
  const currentUserProfile = await JSON.parse(
    window.localStorage.getItem("userProfile") || ""
  );
  return currentUserProfile;
};
export const TaskListComponent = () => {
  const [userTasks, setUserTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Tasks.call(this)
      .then((response) => {
        setUserTasks(response);
      })
      .finally(() => setLoading(false));
    return;
  }, []);

  return userTasks.map((tasks, index) => {
    return (
      <li className="text-white py-3 px-4  mx-10 gap-3" key={index}>
        <div className="flex flex-row gap-3 bg-gray-900 rounded-md">
          <div className="border-none p-2">
            <div className="bg-red-200 rounded-lg p-5">
              <h1 className="text-center text-red-900 text-3xl font-bold">
                {/* {tasks?.task_name[0].toUpperCase()} */}
              </h1>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="text-white">{tasks.task_name}</h2>
              </div>
              <div className="justify-end">
                <h3 className="text-gray-500">{tasks.date}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-start py-2 first-letter:uppercase">{tasks.task_detail}</p>
          </div>
        </div>
      </li>
    );
  });
};
