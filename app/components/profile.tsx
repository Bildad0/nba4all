import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { updateTask } from "../api/api";
import Task from "../models/task.model";

const ProfileDetails = () => {
  const [profile, setUserProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const currentUserProfile = JSON.parse(
      localStorage.getItem("userProfile") || ""
    );
    console.log("user tasks:", currentUserProfile);
    setUserProfile(currentUserProfile);
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

  return (
    <div className="container w-full h-full">
      <div className="profile_details px-2 py-5 mx-7 my-10 bg-slate-300 min-h-16">
        <div className="text-center">
          {" "}
          <div className="avatar">
            <div className="w-8 rounded-full bg-white">
              <Image src="" alt="icon" width={500} height={200} />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-3">
            <label htmlFor="fname">
              <p className="px-5 text-gray-900 text-xl">
                {profile[0]?.fname} {profile[0]?.sname}
              </p>
              <input
                name="fname"
                readOnly={true}
                type="text"
                id="fname"
                value={`@${profile[0]?.username}.`}
                className="input input-bordered w-full max-w-xs bg-transparent text-start text-gray-700"
              ></input>
            </label>
            <div className="flex flex-row gap-3">
              <FcAbout />
              <h2 className="text-gray-700">Edit</h2>
            </div>
          </div>
          <label htmlFor="fname">
            <p className="px-5 text-gray-500">{profile[0]?.email}</p>
          </label>
        </div>
      </div>
      <div className="tasks px-1 py-5 my-3 bg-slate-800 min-h-16">
        <h1 className="text-center text-3xl ">Your tasks</h1>
        <ul className="list-none list-item">
          {profile.map(function (userTasks, index) {
            return (
              <li
                className="text-white py-3 px-4 bg-black mx-10 gap-3"
                key={index}
              >
                <div className="flex flex-row justify-between ">
                  <h2 className="text-white">
                    {index + 1}. {userTasks.task_name}
                  </h2>
                  <h3 className="text-gray-500">{userTasks.date}</h3>
                </div>
                <p className="text-gray-300 px-10 my-5">
                  {userTasks.task_detail}
                </p>
                <div className="flex flex-row justify-between items-center">
                  {userTasks.published === 0 ? (
                    <button
                      className="btn my-4 myButton hover:text-black"
                      onClick={(e) => publishTask(e, userTasks)}
                    >
                      Publish
                    </button>
                  ) : (
                    <div></div>
                  )}
                  <button className="btn bg-red-800 text-red-200 hover:text-red-800 hover:bg-red-200">DELETE</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
