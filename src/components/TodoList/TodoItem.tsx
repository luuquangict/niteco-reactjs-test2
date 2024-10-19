import { Item } from "../../models";

export type TodoItemProps = {
  item: Item;
  onStatusChanged: (status: boolean) => void;
};

export function TodoItem({
  item,
  onStatusChanged: onStatusChanged,
}: TodoItemProps) {
  return (
    <li key={item.id} onClick={() => onStatusChanged(!item.completed)}>
      <input
        name={`chk-item-${item.id}`}
        type="checkbox"
        checked={!!item.completed}
        onChange={() => onStatusChanged(!item.completed)}
      />
      <label htmlFor={`chk-item-${item.id}`}>{item.title}</label>
    </li>
  );
}
