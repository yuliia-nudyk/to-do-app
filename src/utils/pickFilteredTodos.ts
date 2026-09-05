//#region imports
import { FilterStatus, type FilterStatusType } from '../types/FilterStatus';
import type { Todo } from '../types/Todo';
import type { TodosByStatus } from '../types/TodosByStatus';
//#endregion

export function pickFilteredTodos(
  todos: Todo[],
  todosByStatus: TodosByStatus,
  filterStatus: FilterStatusType,
): Todo[] {
  switch (filterStatus) {
    case FilterStatus.Active:
      return todosByStatus.active;
    case FilterStatus.Completed:
      return todosByStatus.completed;
    default:
      return todos;
  }
}
