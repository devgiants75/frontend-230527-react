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
