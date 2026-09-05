import type { FormEvent } from 'react';
import { useTodoForm } from '../hooks/useTodoForm';

type Props = {
  initialTitle: string;
  onSubmit: (title: string) => void;
};

export const TodoEditForm: React.FC<Props> = ({ initialTitle, onSubmit }) => {
  const { title, setTitle, inputRef } = useTodoForm(initialTitle);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        data-cy="TodoTitleField"
        type="text"
        className="todo__title-field"
        placeholder="Empty todo will be deleted"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onBlur={handleSubmit}
      />
    </form>
  );
};
