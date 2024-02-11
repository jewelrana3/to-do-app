import { useState } from "react";
import { useDispatch } from "../contexta/TasksContext";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="text-value"
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className="text">{task.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <li>
      <label>
        <input
          className="check"
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
        />

        {taskContent}

        <button
          onClick={() =>
            dispatch({
              type: "deleted",
              id: task.id,
            })
          }
        >
          Delete
        </button>
      </label>
    </li>
  );
}
