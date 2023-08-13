import React from 'react'
import Props01 from './a_Props/Props01'
import Props02 from './a_Props/Props02'
import Props03 from './a_Props/Props03'
import Props04 from './a_Props/index'
import Props05 from './a_Props/Props05'

export default function Props() {
  return (
    <>
      <Props01 />
      <Props02 />
      <Props03 
        person={{ name: "휴먼1", imageId: "1bX5QH6" }} 
        size={100} 
        isSepia={true}
        thickBorder={true}
      />
      <Props04 />
      <Props05 />
    </>
  );
}
