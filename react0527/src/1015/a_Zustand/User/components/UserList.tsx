import React, { useEffect, useRef, useState } from 'react'
import { useUserStore } from '../stores/user.store'

// 현재 상태에 있는 모든 사용자를 렌더링
export default function UserList() {

  // 스토어 상태 관리
  const users = useUserStore((state) => state.users);
  const removeUser = useUserStore((state) => state.removeUser);
  const updateUser = useUserStore((state) => state.updateUser);

  // 해당 페이지 상태 관리
  const [userIdToEdit, setUserIdToEdit] = useState<number | null>(null);
  const [editingName, setEditingName] = useState<string>('');

  // 페이지 요소를 저장하는 Ref
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userIdToEdit) {
      inputRef.current?.focus();
    }
  }, [userIdToEdit]);

  const handleUpdateClick = (userId: number, name: string) => {
    setUserIdToEdit(userId);
    setEditingName(name);
    userIdToEdit && updateUser(userIdToEdit, name);
  }

  const handleRemoveClick = (userId: number) => {
    removeUser(userId);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  }

  const handleNameSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && userIdToEdit) {
      updateUser(userIdToEdit, editingName);
      setUserIdToEdit(null);
      setEditingName('');
    }
  }

  const handleOutsideClick = () => {
    setUserIdToEdit(null);
    setEditingName('');
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {userIdToEdit === user.id ? (
            <input 
              type="text"
              ref={inputRef}
              value={editingName}
              onChange={handleNameChange}
              onKeyDown={handleNameSubmit}
              onBlur={handleOutsideClick}
              />
          ) : (
            <span>{user.name}</span>
          )}
          <button onClick={() => handleUpdateClick(user.id, user.name)}>
            Update
          </button>
          <button onClick={() => handleRemoveClick(user.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}
