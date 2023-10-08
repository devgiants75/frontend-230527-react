import React from "react";
import { useCounter } from "../context/UseContext";

export default function CounterButton() {
  const { dispatch } = useCounter();
  
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}
