import React from 'react'
import UserList from './components/UserList'
import UserForm from './components/UserForm'

export default function Index() {
  return (
    <div>
      <h1>Users</h1>
      <UserForm />
      <UserList />
    </div>
  )
}
