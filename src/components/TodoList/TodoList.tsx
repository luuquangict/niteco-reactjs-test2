import { Item } from "../../models";
import { TodoItem } from "./TodoItem";

export type TodoListProps = {
  items: Item[];
  onItemStatusChanged: (id: string, status: boolean) => void;
};

export function TodoList({ items, onItemStatusChanged }: TodoListProps) {
  return (
    <ul>
      {items.map((x) => (
        <TodoItem
          key={x.id}
          item={x}
          onStatusChanged={(status) => onItemStatusChanged(x.id, status)}
        />
      ))}
    </ul>
  );
}
