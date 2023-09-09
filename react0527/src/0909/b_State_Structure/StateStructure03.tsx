import React, { useState } from 'react'
import { initialTravelPlan } from './Place'

//^ 5. 깊게 중첩된 객체 구조 정리하기
//

interface Place {
  id: number;
  title: string;
  childIds: number[];
}

function PlaceTree({ placeId, places }: { placeId: number; places: Record<number, Place> }) {
  const place = places[placeId];
  return (
    <li>
      {place.title}
      {place.childIds.length > 0 && (
        <ol>
          {place.childIds.map(childId => (
            <PlaceTree key={childId} placeId={childId} places={places} />
          ))}
        </ol>
      )}
    </li>
  )
}

export default function StateStructure03() {
  const [plan, setPlan] = useState(initialTravelPlan);

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {plan[0].childIds.map(placeId => (
          <PlaceTree key={placeId} placeId={placeId} places={plan} />
        ))}
      </ol>
    </>
  )
}
