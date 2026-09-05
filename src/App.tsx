// #region imports
import React, { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { useTodos } from './contexts/useTodos';
import { FilterStatus, type FilterStatusType } from './types/FilterStatus';
import { useFilteredTodos } from './hooks/useFilteredTodos';
// #endregion

export const App: React.FC = () => {
  const { todos } = useTodos();
  const [filterStatus, setFilterStatus] = useState<FilterStatusType>(
    FilterStatus.All,
  );

  const { filteredTodos, activeCount, completedCount } = useFilteredTodos(
    todos,
    filterStatus,
  );

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <Header />

        <TodoList todos={filteredTodos} />

        {todos.length > 0 && (
          <Footer
            activeCount={activeCount}
            completedCount={completedCount}
            filterStatus={filterStatus}
            onStatusChange={setFilterStatus}
          />
        )}
      </div>
    </div>
  );
};
