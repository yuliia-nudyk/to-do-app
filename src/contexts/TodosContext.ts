//#region imports
import { createContext } from 'react'
import type { Todo } from '../types/Todo'
//#endregion

interface ContextProperty {
  todos: Todo[]
  changeTodos: (todos: Todo[]) => void
}

export const TodosContext = createContext<ContextProperty>({
  todos: [],
  changeTodos: () => {}
})
