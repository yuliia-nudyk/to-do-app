import { useCallback, useEffect, useRef, useState } from 'react';

export function useEditMode() {
  const [isEdited, setIsEdited] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const startEditing = useCallback(() => setIsEdited(true), [setIsEdited]);
  const stopEditing = useCallback(() => setIsEdited(false), [setIsEdited]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        stopEditing();
      }
    };

    const element = elementRef.current;

    element?.addEventListener('dblclick', startEditing);
    document.addEventListener('keyup', handleEscape);

    return () => {
      element?.removeEventListener('dblclick', startEditing);
      document.removeEventListener('keyup', handleEscape);
    };
  }, [startEditing, stopEditing]);

  return { isEdited, startEditing, stopEditing, elementRef };
}
