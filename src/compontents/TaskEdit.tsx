import axios from "axios";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
const TaskEdit = ({
  onState,
  Id,
}: {
  onState: (state: boolean, Id: string) => void;
  Id: string;
}) => {
  const [updateTask, setUpdateTask] = useState({
    title: "",
    Description: "",
    status: "",
    dueDate: " ",
  });

  const getData = async (Id: string) => {
    try {
      await axios
        .get("https://backendapitask.onrender.com/api/v1/task/get-task/" + Id)
        .then((res) => setUpdateTask(res.data?.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setUpdateTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(
        "https://backendapitask.onrender.com/api/v1/task/update-task/" + Id,
        updateTask
      )
      .then(() => {
        onState(false, "-1");
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleBack = () => {
    onState(false, "-1");
  };

  useEffect(() => {
    getData(Id);
  }, [Id]);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-filter backdrop-blur-sm">
      <div className="absolute inset-0 bg-black opacity-25"></div>
      <div className="max-w-md mx-auto mt-5 bg-white shadow-md rounded-md p-6 w-full relative">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
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
              value={updateTask?.title}
              onChange={(e) => handleChange(e)}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              value={updateTask?.Description}
              onChange={(e) => handleChange(e)}
              rows={3}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500 text-black"
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
              value={updateTask?.status}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                handleChange(e)
              }
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
              value={dayjs(updateTask?.dueDate).format("YYYY-MM-DD")}
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
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEdit;
