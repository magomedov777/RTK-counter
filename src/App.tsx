/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import "./App.css";
import { SettingsPannel } from "./app/SettingsPannel/SettingsPannel";
import { AppBarHead } from "./app/components/AppBarHead/AppBarHead";
import { Counter } from "./app/components/Counter/Counter";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Switch from "@mui/material/Switch/Switch";

const App = () => {
  const [settings, setSettings] = useState<string | boolean>(false);
  const settingsOnOff = () => {
    settings === true ? setSettings(false) : setSettings(true);
  };
  return (
    <div>
      <AppBarHead />
      <FormControlLabel control={<Switch defaultChecked />} label="" onClick={settingsOnOff} />
      {settings === true ? <Counter /> : <SettingsPannel />}
    </div>
  );
};

export default App;
