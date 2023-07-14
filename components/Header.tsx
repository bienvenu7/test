import React from "react";

import { LightBulbIcon, MoonIcon } from "@heroicons/react/24/outline";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { onThemeChange } from "@/redux/taskSlice";
import { myTheme } from "@/redux/selector";

type Props = {};

const Header = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const theme = useSelector(myTheme);

  const handleTheme = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch(onThemeChange());
  };

  return (
    <header className={`${theme}`}>
      <div className={`content ${theme}`}>
        <div className={`logo ${theme}`}>TASKMANAGER</div>
        <button className={`${theme}`} onClick={handleTheme}>
          {theme === "light" ? <LightBulbIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
