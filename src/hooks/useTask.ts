import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appStore"; // Import the RootState type
import { Dispatch, useEffect } from "react";
import { UnknownAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getTasks } from "../utils/taskSlice";
const generateTaskData = async (dispatch: Dispatch<UnknownAction>) => {
  try {
    await axios
      .get("https://backendapitask.onrender.com/api/v1/task/get-all-tasks")
      .then((res) => dispatch(getTasks(res?.data?.data)))
      .catch((err) => console.log(err));
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
  }
};
const useTask = () => {
  const dispatch = useDispatch();

  const taskData = useSelector((state: RootState) => state.task.getTasks); // Specify RootState as the type for state
  useEffect(() => {
    !taskData && generateTaskData(dispatch);
  }, [dispatch, taskData]); // Include 'dispatch' and 'taskData' in the dependency array
};

export default useTask;
