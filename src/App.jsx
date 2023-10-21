import React from "react";

import { increment, decrement } from "./redux/counterSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="cotainer">
      <h1>Redux Toolkit</h1>
      <h2>Counter:{value}</h2>
      <div className="card">
        <button onClick={() => dispatch(increment(1))}>Increment</button>
        <button onClick={() => dispatch(decrement(1))}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
