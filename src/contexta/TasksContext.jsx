import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "../data/tasks";
import taskReducer from "../reducer/taskReducer";

export const TaskContext = createContext(null);
export const TasksDispatchContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}

export function useDispatch() {
  return useContext(TasksDispatchContext);
}
