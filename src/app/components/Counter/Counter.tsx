/* eslint-disable @typescript-eslint/no-unused-vars */

import { CounterValue } from "../CounterValue/CounterValue";
import { ButtonPanel } from "../ButtonPanel/ButtonPanel";

export const Counter = () => {
  return (
    <div className="counter">
      <CounterValue />
      <ButtonPanel />
    </div>
  );
};
