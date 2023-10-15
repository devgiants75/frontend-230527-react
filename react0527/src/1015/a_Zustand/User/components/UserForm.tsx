import React, { useState } from 'react'
import { useUserStore } from '../stores/user.store';

type UserEditType = {
  userIdToEdit?: number
}

export default function UserForm({ userIdToEdit }: UserEditType) {
  // user 상태관리
  const users = useUserStore((state) => state.users);
  const addUser = useUserStore((state) => state.addUser);
  // 사용자 수정 기능 추가(Store)
  const updateUser = useUserStore((state) => state.updateUser);
  
  // 해당 유저의 초기 이름
  const initialName = users.find((user) => user.id === userIdToEdit)?.name || ''; 
  const [name, setName] = useState<string>(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userIdToEdit) {
      updateUser(userIdToEdit, name);
    } else {
      addUser(name);
    }
    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter user name'
      />
      <button type='submit'>{
        userIdToEdit ? 'Update' : 'Add'
      } User</button>
    </form>
  )
}
