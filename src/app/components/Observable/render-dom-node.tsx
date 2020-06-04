import React, { useRef, useLayoutEffect } from 'react';

export function DOMNode({ children }: { children: Node | null }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = '';
    if (children) ref.current.appendChild(children);
  }, [children]);

  return <div ref={ref} />;
}
