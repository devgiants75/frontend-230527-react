import React from 'react'
import { useUserStore } from '../stores/user.store'

// 현재 상태에 있는 모든 사용자를 렌더링
export default function UserList() {

  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
          <button onClick={() => removeUser(user.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}
