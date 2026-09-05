// #region imports
import { useTodoActions } from '../hooks/useTodoActions';
import { TodoFilter } from './TodoFilter';
import type { FilterStatusType } from '../types/FilterStatus';
// #endregion

type Props = {
  activeCount: number;
  completedCount: number;
  filterStatus: FilterStatusType;
  onStatusChange: (status: FilterStatusType) => void;
};

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  filterStatus,
  onStatusChange,
}) => {
  const { clearCompleted } = useTodoActions();

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {`${activeCount} items left`}
      </span>

      <TodoFilter filterStatus={filterStatus} onStatusChange={onStatusChange} />

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!completedCount}
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
