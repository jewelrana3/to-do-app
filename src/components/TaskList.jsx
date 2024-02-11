import { useTask } from "../contexta/TasksContext";
import Task from "./Task";

export default function TaskList() {
  const tasks = useTask();
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
