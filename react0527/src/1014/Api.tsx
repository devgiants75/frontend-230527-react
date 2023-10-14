import React from "react";
import Api01 from "./a_API/Api01";
import Api02 from "./a_API/Api02";

export default function Api() {
  return (
    <>
      <h1 style={{ backgroundColor: "pink" }}>1008 API 연동하기</h1>
      <Api01 />
      <Api02 />
    </>
  );
}
