// #region imports
import cn from 'classnames'
import { useTodos } from '../contexts/useTodos'
import { useTodoActions } from '../hooks/useTodoActions'
import { NewTodoForm } from './NewTodoForm'
// #endregion

export const Header = () => {
  const { todos } = useTodos()
  const { toggleAll } = useTodoActions()

  const areTodosCompleted = todos.every(todo => todo.completed)

  return (
    <header className='todoapp__header'>
      {todos.length > 0 && (
        <button
          type='button'
          className={cn('todoapp__toggle-all', {
            active: areTodosCompleted
          })}
          onClick={() => toggleAll(areTodosCompleted)}
          data-cy='ToggleAllButton'
        />
      )}

      <NewTodoForm />
    </header>
  )
}
