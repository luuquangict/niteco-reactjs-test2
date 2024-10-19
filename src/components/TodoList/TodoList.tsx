import { Item, State } from "../../models";
import { TodoItem } from "./TodoItem";

export type TodoListProps = {
  items: Item[];
  stateFilter: State;
  onItemStatusChanged: (id: string, status: boolean) => void;
};

export function TodoList({
  items,
  stateFilter,
  onItemStatusChanged,
}: TodoListProps) {
  function filterItemByState(items: Item[], stateFilter: State): Item[] {
    switch (stateFilter) {
      case "Active": {
        return items.filter((x) => !x.completed);
      }
      case "Completed": {
        return items.filter((x) => !!x.completed);
      }

      default: {
        return items;
      }
    }
  }

  return (
    <ul>
      {filterItemByState(items, stateFilter).map((x) => (
        <TodoItem
          key={x.id}
          item={x}
          onStatusChanged={(status) => onItemStatusChanged(x.id, status)}
        />
      ))}
    </ul>
  );
}
