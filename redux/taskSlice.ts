import { IInit, IIsDone, ITask } from "@/types/task";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IInit = {
  tasks: [],
  singleTask: null,
  theme: "light",
  isDone: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<ITask>) => {
      state.tasks = [...state.tasks, action.payload];
    },
    onDelete: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    onComplete: (state, action: PayloadAction<IIsDone>) => {
      state.isDone = [...state.isDone, action.payload];
      console.log(state.isDone);
    },
    setSingleTask: (state, action: PayloadAction<ITask | null>) => {
      state.singleTask = action.payload;
    },
    onThemeChange: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { onComplete, onDelete, setTasks, setSingleTask, onThemeChange } =
  taskSlice.actions;

export default taskSlice.reducer;
