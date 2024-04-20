'use client';

import { MouseEvent, ReactNode, useState } from 'react';

export default function Card({ children }: { children?: ReactNode }) {
  const [count, setCount] = useState<number>(0);

  function handleClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void {
    setCount((prev) => prev + 1);
  }

  if (!children || !children.valueOf()) {
    return <div>Empty</div>;
  }
  return (
    <div>
      <h1>{children}</h1>
      <button onClick={handleClick}>click me</button>
      <p>Count: {count}</p>
    </div>
  );
}
