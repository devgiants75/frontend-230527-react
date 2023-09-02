import React, { useState } from 'react'

//? 배열 내부의 객체 업데이트

let nextId = 3;
const initialList = [
  { id: 0, title: 'Hello', seen: false},
  { id: 1, title: 'Goodbye', seen: false},
  { id: 2, title: 'Okay', seen: true},
];

interface List {
  id: number;
  title: string;
  seen: boolean;
}

interface BucketListProps {
  lists: List[];
  onToggle: (listId: number, nextSeen: boolean) => void;
}

const BucketList = ({ lists, onToggle }: BucketListProps) => {
  return (
    <ul>
      {lists.map(list => (
        <li key={list.id}>
          <label>
            <input type="checkbox" checked={list.seen} onChange={e => {
              onToggle(list.id, e.target.checked);
            }} />
            {list.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

export default function Array06() {
  const [myList, setMyList] = useState<List[]>(initialList);
  const [yourList, setYourList] = useState<List[]>(initialList);

  // 방금 생성한(변경한) 객체만을 변경해야 한다.
  
  // 새로운 데이터 변경이 일어날 경우 상태와 연관되어 있다면
  // 그 객체를 따로 생성하여 변경해야 한다.
  function handleToggleMyList(listId: number, nextSeen: boolean) {
    // const myNextList = [...myList];
    // const list = myNextList.find(a => a.id === listId);
    // if (list) {
    //   list.seen = nextSeen; 
    //   기존 항목을 변경 시키기 때문에 yourList에도 영향을 미침
    // }
    // setMyList(myNextList);
    setMyList(myList.map(list => {
      if (list.id === listId) {
        return {...list, seen: nextSeen };
      } else {
        return list;
      }
    }));
  }

  function handleToggleYourList(listId: number, nextSeen: boolean) {
    // const yourNextList = [...yourList];
    // const list = yourNextList.find(a => a.id === listId);
    // if (list) {
    //   list.seen = nextSeen; // 기존항목을 변형
    // }
    // setYourList(yourNextList);
    setYourList(yourList.map(list => {
      if (list.id === listId) {
        return {...list, seen: nextSeen};
      } else {
        return list;
      }
    }))
  }

  return (
    <>
      <h2>Bucket List</h2>
      <h3>My List</h3>
      <BucketList lists={myList} onToggle={handleToggleMyList}/>
      <h3>Your List</h3>
      <BucketList lists={yourList} onToggle={handleToggleYourList}/>
    </>
  )
}
