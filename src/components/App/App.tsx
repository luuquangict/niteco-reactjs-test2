import "./App.css";
import { useState } from "react";
import { Input } from "../Input/Input";
import { TodoList } from "../TodoList/TodoList";
import { Item } from "../../models";

function App() {
  const [todoItems, setTodoItems] = useState<Item[]>([]);

  return (
    <div className="App">
      <h1>Todo App - luuquangict</h1>
      <Input placeholder="Enter your text"></Input>
      <TodoList items={todoItems} />
    </div>
  );
}

export default App;
