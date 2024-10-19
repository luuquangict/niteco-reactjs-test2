import "./App.css";
import { useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { TodoList } from "../TodoList/TodoList";
import { Item } from "../../models";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoItems, setTodoItems] = useState<Item[]>([]);

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
        title: title,
        id: uuidv4(),
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

  return (
    <div className="App">
      <h1>Todo App - luuquangict</h1>
      <Input onEnter={handleInputEnter} placeholder="Enter your text"></Input>
      <TodoList
        items={todoItems}
        onItemStatusChanged={handleItemStatusChanged}
      />
    </div>
  );
}

export default App;
