import { useState } from "react";
import { useDispatch, useTask } from "../contexta/TasksContext";
import { getNextId } from "../utilis/getNextId";

export default function AddTask() {
  const [text, setText] = useState("");
  const tasks = useTask();
  const dispatch = useDispatch();

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input
        className="input-custom"
        value={text}
        placeholder="  Add task"
        onChange={handleChangeText}
      />
      <button
        disabled={!text || text.trim() === ""}
        onClick={() => {
          setText(""),
            dispatch({
              type: "added",
              id: getNextId(tasks),
              text,
            });
        }}
      >
        Add
      </button>
    </>
  );
}
