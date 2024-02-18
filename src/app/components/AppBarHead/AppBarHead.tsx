/* eslint-disable @typescript-eslint/no-unused-vars */
import AppBar from "@mui/material/AppBar/AppBar";
import IconButton from "@mui/material/IconButton/IconButton";
import Switch from "@mui/material/Switch/Switch";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Typography from "@mui/material/Typography/Typography";
import React, { useState } from "react";

export const AppBarHead = () => {
  const [theme, setTheme] = useState<string | boolean>("dark");
  const themeChange = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header>
      {theme === "light" ? (
        <AppBar position="static" color="primary">
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
        <AppBar position="static" color="secondary">
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
};
