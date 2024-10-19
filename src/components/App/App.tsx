import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { TodoList } from "../TodoList/TodoList";
import { Item, State } from "../../models";
import { v4 as uuidv4 } from "uuid";
import { ActionBar } from "../TodoList/TodoActionBar";

function App() {
  const [todoItems, setTodoItems] = useState<Item[]>([]);
  const itemLeft = todoItems.filter((x) => !x.completed).length;
  const [state, setState] = useState<State>("All");

  useEffect(() => {
    setTodoItems([
      {
        id: uuidv4(),
        title: "title 1",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "title 2",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "title 3",
        completed: false,
      },
    ]);
  }, []);

  function handleInputEnter(title: string) {
    setTodoItems([
      ...todoItems,
      {
        id: uuidv4(),
        title: title,
        completed: false,
      },
    ]);
  }

  function handleItemStatusChanged(id: string, status: boolean) {
    const item = todoItems.find((x) => x.id == id);
    if (item) {
      item.completed = status;
    }

    setTodoItems([...todoItems]);
  }

  function handleClearCompleted() {
    const filtered = todoItems.filter((x) => !x.completed);
    setTodoItems([...filtered]);

    if (state == "Completed") {
      setState("All");
    }
  }

  return (
    <div className="App">
      <h1>Todo App - luuquangict</h1>
      <Input onEnter={handleInputEnter} placeholder="Enter your text"></Input>
      <TodoList
        stateFilter={state}
        items={todoItems}
        onItemStatusChanged={handleItemStatusChanged}
      />
      <ActionBar
        state={state}
        onStateChanged={(state) => setState(state)}
        onClearCompleted={handleClearCompleted}
        itemLeft={itemLeft}
      />
    </div>
  );
}

export default App;
