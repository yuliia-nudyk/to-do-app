// #region imports
import cn from 'classnames'
import type { Todo } from '../types/Todo'
import { useTodoActions } from '../hooks/useTodoActions'
import { useEditMode } from '../hooks/useEditMode'
import { TodoEditForm } from './TodoEditForm'
import { TodoView } from './TodoView'
// #endregion

type Props = {
  todo: Todo
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { id, title, completed } = todo
  const { deleteTodo, updateTodo } = useTodoActions()
  const { isEdited, stopEditing, elementRef } = useEditMode()

  const handleEditSubmit = (newTitle: string) => {
    const trimmedTitle = newTitle.trim()

    if (!trimmedTitle) {
      deleteTodo(id)
    } else {
      updateTodo(id, { title: trimmedTitle })
    }

    stopEditing()
  }

  return (
    <div
      ref={elementRef}
      data-cy='Todo'
      className={cn('todo', {
        completed: completed
      })}
    >
      <label className='todo__status-label'>
        <input
          data-cy='TodoStatus'
          type='checkbox'
          className='todo__status'
          checked={completed}
          onChange={e => updateTodo(id, { completed: e.target.checked })}
        />
      </label>

      {isEdited ? (
        <TodoEditForm initialTitle={title} onSubmit={handleEditSubmit} />
      ) : (
        <TodoView title={title} onDelete={() => deleteTodo(id)} />
      )}
    </div>
  )
}
