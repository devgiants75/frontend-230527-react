import React, { useState } from 'react';

export default function Practice01() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  // let firstName = '';
  // let lastName = '';

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
    // firstName = e.target.value;
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
    // lastName = e.target.value;
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
    // firstName = '';
    // lastName = '';
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        type="text"
        value={firstName}
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />
      <input 
        type="text"
        value={lastName}
        placeholder='Last Name'
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
