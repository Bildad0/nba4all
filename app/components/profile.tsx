import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FcAbout } from "react-icons/fc";
import { TaskListComponent, Tasks } from "./task_list";

const ProfileDetails = () => {
  const [profile, setUserProfile] = useState({});

  useEffect(() => {
    Tasks.call(this).then((tasks) => setUserProfile(tasks[0]));
  }, []);

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
                {profile?.fname} {profile?.sname}
              </p>
              <input
                name="fname"
                readOnly={true}
                type="text"
                id="fname"
                value={`@${profile?.username}.`}
                className="input input-bordered w-full max-w-xs bg-transparent text-start text-gray-700"
              ></input>
            </label>
            <div className="flex flex-row gap-3">
              <FcAbout />
              <h2 className="text-gray-700">Edit</h2>
            </div>
          </div>
          <label htmlFor="fname">
            <p className="px-5 text-gray-500">{profile?.email}</p>
          </label>
        </div>
      </div>
      <div className="tasks px-1 py-5 my-3 bg-slate-800 min-h-16">
        <h1 className="text-center text-3xl ">Your tasks</h1>
        <ul className="list-none list-item">
          <TaskListComponent />
        </ul>
      </div>
    </div>
  );
};

export default ProfileDetails;
