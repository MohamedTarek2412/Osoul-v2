import { useState, useCallback, type MouseEvent } from 'react';

export function useMousePosition() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return { coords, handleMouseMove };
}
