import React, { useState } from 'react'

type AddTaskProps = {
  onAddTask: (task: string) => void;
}

export default function AddTask({onAddTask}: AddTaskProps) {
  const [text, setText] = useState<string>('');

  return (
    <>
      <input 
        type="text" 
        placeholder='Add Task'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button 
        onClick={() => {
          setText('');
          onAddTask(text);
        }}
      >
        Add
      </button>
    </>
  )
}
