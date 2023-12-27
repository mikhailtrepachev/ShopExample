import { PriorityLevelDto } from './priority-level-dto.model';
import { TodoListDto } from './todo-list-dto.model';

export interface TodosVm
{
  priorityLevels: PriorityLevelDto[];
  lists: TodoListDto[];
}
