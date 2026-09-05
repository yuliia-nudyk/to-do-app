import { Todo } from './Todo';

export interface TodosByStatus {
  active: Todo[];
  completed: Todo[];
}
