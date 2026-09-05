import { useEffect, useRef, useState } from 'react';

export function useTodoForm(initialTitle?: string) {
  const [title, setTitle] = useState(initialTitle ?? '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return { title, setTitle, inputRef };
}
