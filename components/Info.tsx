import { allTasks, isDone, myTheme, singleTask } from "@/redux/selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AppDispatch } from "@/redux/store";
import { onComplete, setSingleTask } from "@/redux/taskSlice";

type Props = {};

const Info = () => {
  const myTask = useSelector(singleTask);

  const allTask = useSelector(allTasks);
  const done = useSelector(isDone);

  const dispatch: AppDispatch = useDispatch();

  const theme = useSelector(myTheme);

  const handleComplete = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    event.preventDefault();
    const index = allTask.findIndex((item) => item.id === myTask?.id);
    dispatch(onComplete({ id: index, taskId: id }));
  };

  return (
    <div className={`info__container ${theme}`}>
      <div className="top">
        <h2 className={`${theme}`}>{myTask?.title}</h2>
        <button
          className={`${theme}`}
          onClick={() => dispatch(setSingleTask(null))}
        >
          <XMarkIcon />
        </button>
      </div>
      <p className={`${theme}`}>{myTask?.comment}</p>
      <span className={`${theme}`}>{myTask?.createAt}</span>
      {done.find((item) => item.taskId === myTask?.id) ? (
        <span className={`${theme}`}>Задача запольнено</span>
      ) : (
        <button
          className={`${theme}`}
          onClick={(e) => handleComplete(e, myTask?.id as string)}
        >
          end task
        </button>
      )}
    </div>
  );
};

export default Info;
