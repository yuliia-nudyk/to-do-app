import type { Todo } from '../types/Todo';
import type { TodosByStatus } from '../types/TodosByStatus';

export function splitTodosByStatus(todos: Todo[]): TodosByStatus {
  const todosByStatus: TodosByStatus = {
    active: [],
    completed: [],
  };

  todos.forEach(todo => {
    const status: keyof TodosByStatus = todo.completed ? 'completed' : 'active';

    todosByStatus[status].push(todo);
  });

  return todosByStatus;
}
