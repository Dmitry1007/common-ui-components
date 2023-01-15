import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
    console.log(value);
  };

  return (
    <Panel className="m-3">
      <h2 className="text-lg">Count is {count}</h2>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Increment</Button>
      </div>
      <form>
        <label>Add a number</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
          value={valueToAdd || ""}
        />
        <Button>Add It!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
