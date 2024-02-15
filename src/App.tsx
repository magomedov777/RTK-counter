/* eslint-disable @typescript-eslint/no-unused-vars */
import "./App.css";
import { AppBarHead } from "./app/components/AppBarHead/AppBarHead";
import { Counter } from "./app/components/Counter/Counter";

const App = () => {
  return (
    <div>
      <AppBarHead />
      <Counter />
    </div>
  );
};

export default App;
