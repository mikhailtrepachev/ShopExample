import { TodoItemDto } from './todo-item-dto.model';

export interface TodoListDto
{
  id: number;
  title: string;
  colour: string;
  items: TodoItemDto[];
}
