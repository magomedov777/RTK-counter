/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Switch from "@mui/material/Switch/Switch";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import React, { memo, useEffect, useState } from "react";
import s from "./style.module.css";

export const AppBarHead = memo(() => {
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? JSON.parse(storedTheme) : "dark";
  const [theme, setTheme] = useState<string | boolean>(initialTheme);

  const themeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <header>
      {theme === "light" ? (
        <AppBar className={s.headerBlue} position="static" color="primary">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={themeChange}>
              <Switch defaultChecked color="warning" />
            </IconButton>

            <Typography variant="caption" color="yellow" component="div" fontStyle="italic">
              blue theme
            </Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar className={s.headerViolet} position="static" color="secondary">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={themeChange}>
              <Switch defaultChecked color="warning" />
            </IconButton>
            <Typography variant="caption" color="black" component="div" fontStyle="italic">
              violet theme
            </Typography>
          </Toolbar>
        </AppBar>
      )}
    </header>
  );
});
