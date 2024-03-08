import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  Description: string;
  status: string;
  dueDate: string;
}

const initialState: {
  addTask: Task[];
  updateTask: Task[];
  getTasks: null | Task[];
} = {
  addTask: [],
  updateTask: [],
  getTasks: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.addTask.push(action.payload);
    },
    updateTask: () => {},
    getTasks: (state, action: PayloadAction<Task[]>) => {
      state.getTasks = action.payload;
    },
  },
});

export const { addTask, updateTask, getTasks } = taskSlice.actions;

export default taskSlice.reducer;
