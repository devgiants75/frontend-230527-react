import React, { useState } from 'react'

type TaskType = {
  id: number;
  text: string;
  done: boolean;
}

type TaskListProps = {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (taskId: number) => void;
}

type TaskProps = {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (taskId: number) => void;
}

function Task({task, onChange, onDelete}: TaskProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // 편집 모드인지 확인 후 컨텐츠를 반환
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input 
          type="text" 
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    )
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input 
        type="checkbox" 
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  )
}

export default function TaskList({tasks, onChangeTask, onDeleteTask}: TaskListProps) {

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask}/>
        </li>
      ))}
    </ul>
  )
}
