import { useState } from "react";
import TaskModal from "../compontents/TaskEdit";
import useTask from "../hooks/useTask";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { IoAddCircleOutline } from "react-icons/io5";
import TaskCreate from "../compontents/TaskCreate";
import axios from "axios";

const TaskList = () => {
  const [Id, setId] = useState<string>("-1");
  const [createTask, setCreateTask] = useState<boolean>(false);
  useTask();
  const taskData = useSelector((store: RootState) => store.task.getTasks);

  const [isEdit, setEdit] = useState<boolean>(false);
  const handleEdit = (id: string) => {
    setEdit(true);
    console.log(id);
    setId(id);
  };
  const handleChildEdit = (newSate: boolean, Id: string) => {
    setEdit(newSate);
    setId(Id);
  };
  const handleCreate = () => {
    setCreateTask(true);
  };
  const handleChildCreate = (newSate: boolean) => {
    setCreateTask(newSate);
  };
  const handleDelete = async (id: string) => {
    console.log(id);
    await axios
      .delete("http://localhost:8080/api/v1/task/delete-task/" + id)
      .then((res) => {
        console.log(res.data);
        location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="relative  ">
      <button
        className="absolute top-2 right-3 text-white flex items-center justify-end gap-2 px-1 cursor-pointer hover:bg-white hover:text-black rounded-2xl shadow-lg"
        onClick={handleCreate}
      >
        Create Task
        <span>
          <IoAddCircleOutline className="text-2xl" />
        </span>
      </button>
      {createTask && <TaskCreate onState={handleChildCreate} />}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs  uppercase bg-gray-700 text-white">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Due Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {taskData?.map((task) =>
            task.id === Id ? (
              isEdit && <TaskModal onState={handleChildEdit} Id={Id} />
            ) : (
              <tr
                key={task.id}
                className="bg-white border-b  dark:border-gray-700 text-black"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {task.title}
                </th>
                <td className="px-6 py-4">{task.Description}</td>
                <td className="px-6 py-4">{task.status}</td>
                <td className="px-6 py-4">
                  {new Date(task.dueDate).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </td>
                <td className="px-6 py-4 flex gap-3">
                  <button
                    className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                    onClick={() => handleEdit(task.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 border rounded-lg hover:bg-gray-100"
                    onClick={() => handleDelete(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;
