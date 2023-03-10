import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const CHANGE_INPUT_VALUE = "change-input-value";
const ADD_VALUE_TO_COUNT = "add-value-to-count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case CHANGE_INPUT_VALUE:
      state.valueToAdd = action.payload;
      return;
    case ADD_VALUE_TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
    // OR
    // throw new Error('unexpected action type: ' + action.type);
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: CHANGE_INPUT_VALUE, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h2 className="text-lg">Count is {state.count}</h2>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
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
