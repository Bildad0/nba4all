import React from "react";
import { TaskListComponent } from "./task_list";
import User from "../models/user.model";

interface ProfileProps {
  user: User;
}
const ProfileDetails: React.FC<ProfileProps> = ({ user }) => {
  return (
    <div className="container">
     
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
