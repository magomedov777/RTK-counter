/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import { SettingsPannel } from "./app/SettingsPannel/SettingsPannel";
import { AppBarHead } from "./app/components/AppBarHead/AppBarHead";
import { Counter } from "./app/components/Counter/Counter";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";

const App = () => {
  const [settings, setSettings] = useState<string | boolean>(false);
  const [time, setTime] = useState(0);

  const resetYourTime = () => setTime(0);
  const settingsOnOff = () => (settings === true ? setSettings(false) : setSettings(true));

  useEffect(() => {
    const storedTime = localStorage.getItem("time");
    if (storedTime) {
      setTime(parseInt(storedTime, 10));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => {
        const updatedTime = time + 1;
        localStorage.setItem("time", updatedTime.toString());
        return updatedTime;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <AppBarHead />
      <h4 onClick={resetYourTime} className="time">
        Your time on this platform: <b style={{ color: "red" }}>{time}</b> sec
      </h4>
      <FormControlLabel
        control={<Switch defaultChecked />}
        label="settings"
        labelPlacement="bottom"
        onClick={settingsOnOff}
      />
      {settings === true ? <Counter /> : <SettingsPannel />}
    </div>
  );
};

export default App;
