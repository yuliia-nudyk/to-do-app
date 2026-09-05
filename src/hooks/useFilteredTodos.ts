//#region imports
import { useMemo } from 'react';
import type { FilterStatusType } from '../types/FilterStatus';
import type { Todo } from '../types/Todo';
import { splitTodosByStatus } from '../utils/splitTodosByStatus';
import { pickFilteredTodos } from '../utils/pickFilteredTodos';
//#endregion

export function useFilteredTodos(
  todos: Todo[],
  filterStatus: FilterStatusType,
) {
  return useMemo(() => {
    const todosByStatus = splitTodosByStatus(todos);
    const filteredTodos = pickFilteredTodos(todos, todosByStatus, filterStatus);

    return {
      filteredTodos,
      activeCount: todosByStatus.active.length,
      completedCount: todosByStatus.completed.length,
    };
  }, [todos, filterStatus]);
}
