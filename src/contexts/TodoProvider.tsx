//#region imports
import { useMemo } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Todo } from "../types/Todo";
import { TodosContext } from "./TodosContext";
//#endregion

type Props = {
  children: React.ReactNode;
};

export const TodosProvider: React.FC<Props> = ({ children }) => {
  const [todos, changeTodos] = useLocalStorage<Todo[]>('todos', []);

  const value = useMemo(
    () => ({
      todos,
      changeTodos,
    }),
    [todos, changeTodos],
  );

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
};
