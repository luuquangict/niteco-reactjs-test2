import { Item } from "../../models";

export type TodoItemProps = {
  item: Item;
};

export function TodoItem({ item }: TodoItemProps) {
  return (
    <li key={item.id}>
      <input type="checkbox" />
      {item.title}
    </li>
  );
}
