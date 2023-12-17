import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [mainTask, setMainTask] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (task === "") {
      alert("plase add task");
    } else {
      setMainTask([...mainTask].concat(task));
      setTask("");
    }
  }
  function deleteTask(i) {
    const newtodo = mainTask.filter((_, taskindex) => taskindex !== i);
    setMainTask(newtodo);
  }
  return (
    <div className="box">
      <form className="container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Task"
          className="task"
          name="title"
          value={task}
          onChange={handleChange}
          id={task.length}
        />
        <button className="btn">Add Task</button>
      </form>

      <div>
        <ul>
          {mainTask.map((t, i) => (
            <li>
              <div>
                <h2>{t}</h2>
              </div>
              <button className="delete_btn" onClick={() => deleteTask(i)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
