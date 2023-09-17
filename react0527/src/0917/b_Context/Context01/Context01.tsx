import React from "react";
import Section from "./Section";
import Heading from "./Heading";
//! Context(컨텍스트)
// : 부모 컴포넌트가 그 아래의 트리의 모든 컴포넌트에 정보를 제공할 수 있게 해줌.
// (props를 명시적으로 전달하지 않더라도 가능!)

//! props 전달하는 문제점
// 트리를 깊게 전달해야 할 props이나 많은 컴포넌트들이 같은 prop을 필요로 하는 경우
// 데이터가 필요한 컴포넌트와 가장 가까운 공통 조상이 멀리 떨어져 있을 때, 그러한 높은 상태로 상태를 올리는 것
// >> prop 드릴링

//! context
//? context를 사용하는 이유
// prop 드릴링 현상을 방지하기 위해
// props를 전달하지 않고 트리의 필요한 컴포넌트에 데이터를
// 텔레포트(순간이동)하는 방법

//? context의 특징
// 부모 컴포넌트가 그 아래의 트리 전체에 데이터를 제공 가능

//? context 사용 단계
// 1. 컨텍스트를 생성
//    : 제목 레벨을 위한 것, LevelContext
// 2. 해당 데이터가 필요한 컴포넌트에서 해당 컨텍스트를 사용
//    : Heading은 LevelContext를 사용
// 3. 데이터를 지정하는 컴포넌트에서 해당 컨텍스트를 제공
//    : Section은 LevelContext를 제공

export default function Context01() {
  return (
    <Section>
      <Heading>Title</Heading>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>About</Heading>
          <Heading>Photos</Heading>
          <Heading>Videos</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
      <Heading>Sub-sub-sub-heading</Heading>
      <Heading>Sub-sub-sub-sub-heading</Heading>
    </Section>
  );
}
