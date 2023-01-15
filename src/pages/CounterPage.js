import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_VALUE = "change-value";
const ADD_VALUE = "add-value";

const reducer = (state, action) => {
  if (action.type === INCREMENT_COUNT) {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === DECREMENT_COUNT) {
    return {
      ...state,
      count: state.count - 1,
    };
  } else if (action.type === CHANGE_VALUE) {
    return {
      ...state,
      valueToAdd: action.payload,
    };
  } else if (action.type === ADD_VALUE) {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }
  return state;
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
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    // setValueToAdd(value);
    dispatch({ type: CHANGE_VALUE, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ADD_VALUE, payload: state.valueToAdd });
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
