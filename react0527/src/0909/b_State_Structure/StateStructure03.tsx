import React, { useState } from 'react'
import { initialTravelPlan } from './Place'

//^ 5. 깊게 중첩된 객체 구조 정리하기
// 행성, 대륙, 국가로 구성된 여행 계획 

//? 객체와 배열을 사용하여 상태를 구조화

// 행성(Earth, Moon, Mars)
// >> 대륙(Earth - Africa, Americas, Asia ...)
// >>>> 국가(Earth - Africa - Botswana)

//? 객체와 배열의 중첩된 구조를 평평하게 만들어서 상태 변화
// 각 장소가 자식 장소의 배열을 가지는 나무와 같은 구조 대신
// 각 장소가 자식 장소 ID의 배열을 가지게 작성
// : 상태가 플랫(정규화)됨

// interface Place {
//   id: number;
//   title: string;
//   childIds: number[];
// }

// place.ts에서 가져온 초기 여행 계획 타입 정의
interface Place {
  // id: number;
  title: string;
  childIds: number[];
}

interface PlacesById {
  [id: number]: Place;
}

// props 타입 정의
interface PlaceTreeProps {
  id: number;
  parentId: number;
  placesById: PlacesById;
  onComplete: (parentId: number, childId: number) => void;
}

function PlaceTree({ id, parentId, placesById, onComplete }: PlaceTreeProps) {
  const place = placesById[id]; // 현재 장소 정보를 저장
  const childIds = place.childIds;

  return (
    <li>
      {/* 현재 장소 이름을 출력 */}
      {place.title} 
      {/* 완료 버튼을 클릭하면 해당 장소를 목록에서 삭제 */}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>완료</button>
      {/* 자식 ID들이 있을 경우, 해당 자식들에 대한 PlaceTree를 렌더링 */}
      {/* 
      행성, 대륙은 자식 ID가 존재 O
      국가는 자식 ID가 존재하지 X
       */}
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map(childId => (
            // 자식 장소 각각에 대한 PlaceTree 컴포넌트를 생성
            <PlaceTree key={childId} id={childId} parentId={id} placesById={placesById} onComplete={onComplete} />
          ))}
        </ol>
      )}
    </li>
  )
}

// 전체 여행 계획을 표시하는 메인 컴포넌트
export default function StateStructure03() {
  // 여행 계획의 전체 데이터를 상태로 관리
  const [plan, setPlan] = useState(initialTravelPlan);

  // 선택한 장소를 완료 (삭제) 처리하는 함수
  function handleComplete(parentId: number, childId: number) {
    setPlan(prevPlan => {
      const parent = prevPlan[parentId];

      // 선택한 childId를 포함하지 않는 부모 장소의 새로운 상태를 생성
      const nextParent: Place = {
        ...parent,
        childIds: parent.childIds.filter(id => id !== childId)
      };

      return {
        ...prevPlan,
        [parentId]: nextParent
      } as PlacesById;
    });
  }

  const root = plan[0];
  const planetIds = root.childIds;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {/* 최상위 장소의 자식 장소들을 목록으로 렌더링 */}
        {/* plan[0].childIds.map */}
        {planetIds.map(placeId => (
          // 각 자식 장소에 대해 PlaceTree 컴포넌트를 생성
          <PlaceTree key={id} id={id} parentId={0} placesById={plan} onComplete={handleComplete} />
        ))}
      </ol>
    </>
  )
}
