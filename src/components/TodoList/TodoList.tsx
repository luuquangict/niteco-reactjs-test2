import { Item } from "../../models";
import { TodoItem } from "./TodoItem";

export type TodoListProps = {
  items: Item[];
};

export function TodoList({ items }: TodoListProps) {
  return (
    <ul>
      {items.map((x) => (
        <TodoItem item={x} />
      ))}
    </ul>
  );
}
