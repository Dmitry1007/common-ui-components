import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "increment-count") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "decrement-count") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: "increment-count" });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: "decrement-count" });
  };

  const handleChange = (event) => {
    // const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h2 className="text-lg">Count is {state.count}</h2>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Increment</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a number</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          onChange={handleChange}
          value={state.valueToAdd || ""}
        />
        <Button>Add It!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
