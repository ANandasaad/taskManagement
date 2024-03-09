import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../utils/taskSlice";

const TaskCreate = ({ onState }: { onState: (state: boolean) => void }) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    title: "",
    Description: "",
    status: "",
    dueDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "https://backendapitask.onrender.com/api/v1/task/create",
        {
          title: task.title,
          Description: task.Description,
          status: task.status ? task.status : "pending",
          dueDate: task.dueDate,
        }
      );

      dispatch(addTask(response?.data));

      onState(false);
      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    onState(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="max-w-md mx-auto mt-5 bg-white shadow-md rounded-md p-6 w-full relative">
        <h2 className="text-lg font-semibold mb-4">Create Task</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Task Name
            </label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Task Name"
              value={task?.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              placeholder="Description"
              value={task?.Description}
              onChange={handleChange}
              rows={3}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>

            <select
              id="status"
              name="status"
              value={task?.status}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            >
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              placeholder="date"
              value={task?.dueDate}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="bg-gray-400 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none"
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskCreate;
