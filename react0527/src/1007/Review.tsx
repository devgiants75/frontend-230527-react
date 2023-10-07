import React from "react";
import UseEffect from "./a_review/UseEffect";
import UseEffect02 from "./a_review/UseEffect02";
import UseContext from "./a_review/context/UseContext";
import Counter from "./a_review/components/Counter";
import CounterButton from "./a_review/components/CounterButton";

export default function Review() {
  return (
    <>
      <h1 style={{ backgroundColor: "pink" }}>1007 useEffect 복습</h1>
      <UseEffect />
      <UseEffect02 />
      <hr />

      <UseContext>
        <Counter />
        <CounterButton />
      </UseContext>
    </>
  );
}
