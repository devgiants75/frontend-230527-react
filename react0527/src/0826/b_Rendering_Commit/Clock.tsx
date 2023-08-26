import React from 'react'

interface ClockProps {
  time: string;
}

export default function Clock({ time }: ClockProps) {
  return (
    <>
      <h1>{time}</h1>
      <input type="text" />
    </>
  )
}
