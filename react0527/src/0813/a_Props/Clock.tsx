import React from 'react'

interface ClockProps {
  color: string;
  time: string;
}

const Clock = ({ color, time }: ClockProps) => (
  <h1 style={{ color: color }}>
    {time}
  </h1>
);

export default Clock;