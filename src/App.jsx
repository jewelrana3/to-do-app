import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexta/TasksContext";

export default function App() {
  return (
    <div className="head">
      <div>
        <TaskProvider>
          <h1 className="todo">Todo List App</h1>
          <AddTask />
          <TaskList />
        </TaskProvider>
      </div>
    </div>
  );
}
