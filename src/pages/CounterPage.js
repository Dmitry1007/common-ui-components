import { useState } from "react";
import Button from "../components/Button";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count is {count}</h2>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Increment</Button>
    </div>
  );
}

export default CounterPage;
