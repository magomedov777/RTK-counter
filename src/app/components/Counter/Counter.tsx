/* eslint-disable @typescript-eslint/no-unused-vars */

import { CounterValue } from "../CounterValue/CounterValue";
import { ButtonPanel } from "../ButtonPanel/ButtonPanel";
import { memo } from "react";

export const Counter = memo(() => {
  return (
    <div className="counter">
      <CounterValue />
      <ButtonPanel />
    </div>
  );
});
