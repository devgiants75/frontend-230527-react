import React, { useState } from 'react'

//? 배열 수정하기
// 배열의 일부 또는 전체 항목을 변경하려면
// : map()를 사용하여 새 배열을 생성하여 렌더링

interface Shape {
  id: number;
  type: 'circle' | 'square';
  x: number;
  y: number;
}

let initialShpes: Shape[] = [
  { id: 0, type: 'circle', x: 50, y: 100},
  { id: 1, type: 'square', x: 150, y: 100},
  { id: 2, type: 'circle', x: 250, y: 100},
];

export default function Array02() {
  const [shapes, setShapes] = useState<Shape[]>(initialShpes);

  function handleClick() {
    const nextShapes = shapes.map(shape => {
      if (shape.type === 'square') {
        // 변화 X
        return shape;
      } else {
        // 원의 위치를 50px 아래로 이동
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    // 새로운 배열을 렌더링
    setShapes(nextShapes);
  }

  return (
    <>
      <div style={{ position: 'relative', height: '200px' }}>
        <button onClick={handleClick}>Move Circles down!</button>
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "absolute",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20
            }}
          />
        ))}
      </div>
    </>
  );
}
