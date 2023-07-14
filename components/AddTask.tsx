import randomNumber from "@/hooks/generateRandomNumber";
import { AppDispatch } from "@/redux/store";
import { setTasks } from "@/redux/taskSlice";
import { ITask } from "@/types/task";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { myTheme } from "@/redux/selector";

const AddTask = () => {
  const [inputsData, setInputData] = useState<ITask>({
    comment: "",
    title: "",
  });

  const myDate = moment().format("LLL");

  const dispatch: AppDispatch = useDispatch();

  const theme = useSelector(myTheme);

  const handleAddTask = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (inputsData.title === "" || inputsData.comment === "") {
      return;
    }
    dispatch(
      setTasks({
        ...inputsData,
        id: `${inputsData.title}-${randomNumber()}`,
        createAt: `Задача добавлена в ${myDate}.`,
      })
    );
    setInputData({
      comment: "",
      title: "",
      completeAt: "",
      createAt: "",
      id: "",
    });
  };

  return (
    <div className="add__container">
      <div className="add__content">
        <div className="add__title">
          <label className={`${theme}`} htmlFor="title">
            Называние :
          </label>
          <input
            className={`${theme}`}
            id="title"
            type="text"
            placeholder="Введите называние задача"
            value={inputsData.title}
            onChange={(event) =>
              setInputData({ ...inputsData, title: event.target.value })
            }
          />
        </div>
        <div className="add__title">
          <label className={`${theme}`} htmlFor="comment">
            Комментарии :
          </label>
          <input
            className={`${theme}`}
            id="comment"
            type="text"
            placeholder="Введите комментарии задача"
            value={inputsData.comment}
            onChange={(event) =>
              setInputData({ ...inputsData, comment: event.target.value })
            }
          />
        </div>
      </div>
      <button onClick={handleAddTask}>Добавить задача</button>
    </div>
  );
};

export default AddTask;
