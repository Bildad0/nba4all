import Task from "../models/task.model";
import User from "../models/user.model";

const port = 8080;
const url = "http://localhost:" + port;

const headers = {
  origin: "*",
  Accept: "application/json",
};

const getOptions = {
  method: "GET",
  headers: headers,
};

export const createUser = async (user: User) => {
  console.log("user payload:", user);
  try {
    await fetch(`${url}/api/user/new`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ user }),
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateUser = async (user: User) => {
  try {
    await fetch(`${url}/api/user/update` + new URLSearchParams(user.id), {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({ user }),
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};
export const getUserByEmail = async (email: string) => {
  try {
    const result = await fetch(
      `${url}/api/user/?` + new URLSearchParams({ email }),
      getOptions
    );
    if (result.status === 200) return result.json();
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const createNewTask = async (task: Task) => {
  console.log("Payload: ", task);
  try {
    await fetch(`${url}/api/task/create`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(task),
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const fetchAllTasks = async () => {
  try {
    const data = await fetch(`${url}/api/task`, getOptions);
    const response = data.json();
    return response;
  } catch (e) {
    console.error(e);
  }
};

export const fetchTaskById = async (id: any) => {
  try {
    const data = await fetch(
      `${url}/api/task/one/?` + new URLSearchParams({ id }),
      getOptions
    );
    const response = await data.json();
    return response;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const updateTask = async (task: Task) => {
  try {
    await fetch(
      `${url}/api/task/update?` +
        new URLSearchParams({ id: task.id?.toString() || "" }),
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({ task }),
      }
    );
  } catch (e) {
    console.log(e);
    return e;
  }
};
