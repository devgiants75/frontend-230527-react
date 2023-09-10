import React, { ChangeEvent, useState } from 'react'
import { filterItems, foods } from './Data';

// query 상태를 Practice 컴포넌트로 올린 뒤 
// filterItems(foods, query)를 호출하여 필터링된 목록을 가져온 다음
// 해당 목록을 List에 전달

type Food = {
  id: number;
  name: string;
  description: string;
}

type ListProps = {
  items: Food[];
}

type SearchBarProps = {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <label>
      Search: {' '}
      <input type="text" value={query} onChange={onChange} />
    </label>
  )
}

function List({ items }: ListProps) {
  return (
    <table>
      <tbody>
        {items.map((food: Food) => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// 목록 필터링
export default function Practice() {
  const [query, setQuery] = useState<string>('');
  const results = filterItems(foods, query);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  return (
    <>
      <br />
      <h2>0910 Practice</h2>
      <SearchBar query={query} onChange={handleChange}/>
      {/* horizontal rule - 가로로 선을 긋는 태그*/}
      <hr /> 
      <List items={results}/>
    </>
  )
}
