import { useTodos } from '../contexts/useTodos';
import type { Todo } from '../types/Todo';

export function useTodoActions() {
  const { todos, changeTodos } = useTodos();

  const addTodo = (title: string) => {
    changeTodos([
      ...todos,
      {
        id: +new Date(),
        title,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id: number) => {
    changeTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: number, changes: Partial<Todo>) => {
    changeTodos(
      todos.map(todo => (todo.id === id ? { ...todo, ...changes } : todo)),
    );
  };

  const toggleAll = (areAllCompleted: boolean) => {
    changeTodos(todos.map(todo => ({ ...todo, completed: !areAllCompleted })));
  };

  const clearCompleted = () => {
    changeTodos(todos.filter(todo => !todo.completed));
  };

  return { addTodo, deleteTodo, updateTodo, toggleAll, clearCompleted };
}
