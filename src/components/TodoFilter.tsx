//#region imports
import cn from 'classnames';
import type { FC } from 'react';
import { FilterStatus, type FilterStatusType } from '../types/FilterStatus';
//#endregion

type Props = {
  filterStatus: FilterStatusType;
  onStatusChange: (status: FilterStatusType) => void;
};

const filterLinks: Record<FilterStatusType, string> = {
  [FilterStatus.All]: '#/',
  [FilterStatus.Active]: '#/active',
  [FilterStatus.Completed]: '#/completed',
};

export const TodoFilter: FC<Props> = ({ filterStatus, onStatusChange }) => (
  <nav className="filter" data-cy="Filter">
    {Object.values(FilterStatus).map(status => (
      <a
        key={status}
        href={filterLinks[status]}
        className={cn('filter__link', {
          selected: status === filterStatus,
        })}
        data-cy={`FilterLink${status}`}
        onClick={() => onStatusChange(status)}
      >
        {status}
      </a>
    ))}
  </nav>
);
