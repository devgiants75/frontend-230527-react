import React from "react";
import { useCounter } from "../context/UseContext";

export default function Counter() {
  const { state } = useCounter();

  return (
    <div>
      <p>Count: {state.count}</p>
    </div>
  );
}
