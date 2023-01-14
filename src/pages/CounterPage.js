import { useState, useEffect } from "react";
import Button from "../components/Button";

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return { count, handleClick };
}

function CounterPage({ initialCount }) {
  const { count, handleClick } = useCounter(initialCount);

  return (
    <div>
      <h2>Count is {count}</h2>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
}

export default CounterPage;
