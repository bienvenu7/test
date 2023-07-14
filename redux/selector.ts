import { RootState } from "./store";

export const allTasks = (state: RootState) => state.tasks.tasks;

export const singleTask = (state: RootState) => state.tasks.singleTask;

export const myTheme = (state: RootState) => state.tasks.theme;

export const isDone = (state: RootState) => state.tasks.isDone;
