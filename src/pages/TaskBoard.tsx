import useTask from "../hooks/useTask";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import Loading from "../compontents/Loading";

const TaskBoard = () => {
  useTask();
  const taskData = useSelector((store: RootState) => store.task.getTasks);

  return (
    <div className="relative  ">
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
          </tr>
        </thead>
        {!taskData ? (
          <Loading />
        ) : (
          <tbody>
            {taskData?.map((task) => (
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
                  {" "}
                  {new Date(task.dueDate).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TaskBoard;
