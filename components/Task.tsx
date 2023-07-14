import React from "react";

import { TrashIcon } from "@heroicons/react/24/outline";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "@/types/task";
import { onDelete, setSingleTask } from "@/redux/taskSlice";
import { singleTask } from "@/redux/selector";

interface Props {
  task: ITask;
}

const Task = ({ task }: Props) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    dispatch(onDelete(id));
  };

  const handleSelectTask = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    singleTask: ITask
  ) => {
    event.preventDefault();
    dispatch(setSingleTask(singleTask));
  };

  return (
    <div onClick={(e) => handleSelectTask(e, task)} className="task__container">
      <div className="task__content">
        <h2>{task.title}</h2>
        <p>{task.comment}</p>
      </div>
      <button onClick={(event) => handleDelete(event, task.id as string)}>
        <TrashIcon />
      </button>
    </div>
  );
};

export default Task;
