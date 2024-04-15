import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "4/10/2023" },
    { name: "Go to College", dueDate: "4/10/2023" },
    { name: "Like This", dueDate: "4/10/2023" },
  ];
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
