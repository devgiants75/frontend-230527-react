import React from 'react'

//! 컴포넌트를 순수하게 유지하기
// 프로그래밍에서의 '순수성'
// - 개입X: 호출되기 전에 존재하던 객체나 변수를 변경하지 X
// - 같은 입력이 주어지면 순수한 함수는 항상 같은 결과를 반환

// y = 2x
// 외부 요인(시간, 주식 시장의 상태, 온도 등)에 따라 값에 영향을 주지않고 계산하고자하는 결과에 대한 식만을 정의하는 함수
function double(num: number): number {
  return 2 * num;
}

type RecipeProps = {
  drinkers: number;
}
function Recipe({ drinkers }: RecipeProps) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  )
}

export default function Components01() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  )
}
