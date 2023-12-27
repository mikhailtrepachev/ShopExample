import { PriorityLevel } from '../../priority-level.model';

export interface UpdateTodoItemDetailCommand
{
  id: number;
  listId: number;
  priority: PriorityLevel;
  note: string;
}
