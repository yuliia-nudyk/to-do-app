import type { FormEvent } from 'react';
import { useTodoActions } from '../hooks/useTodoActions';
import { useTodoForm } from '../hooks/useTodoForm';

export const NewTodoForm = () => {
  const { addTodo } = useTodoActions();

  const { title, setTitle, inputRef } = useTodoForm();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    addTodo(trimmedTitle);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        data-cy="NewTodoField"
        type="text"
        className="todoapp__new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </form>
  );
};
