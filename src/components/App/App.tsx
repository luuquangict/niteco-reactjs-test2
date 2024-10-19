import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { TodoList } from "../TodoList/TodoList";
import { Item, State } from "../../models";
import { v4 as uuidv4 } from "uuid";
import { ActionBar } from "../TodoList/TodoActionBar";

const LOCAL_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoItems, setTodoItems] = useState<Item[]>([]);
  const itemLeft = todoItems.filter((x) => !x.completed).length;
  const [state, setState] = useState<State>("All");

  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
    );
    if (storedTodos && storedTodos.length > 0) {
      setTodoItems(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoItems));
    console.log("Saved todo list");
  }, [todoItems]);

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

  function handleMarkAllDone() {
    for (let i = 0; i < todoItems.length; i++) {
      todoItems[i].completed = true;
    }

    setTodoItems([...todoItems]);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App - luuquangict</h1>
        <button onClick={handleMarkAllDone}>Mark all done</button>
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
    </div>
  );
}

export default App;
