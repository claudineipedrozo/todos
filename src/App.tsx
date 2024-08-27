import { FormEvent, useState } from "react";

import styles from "./App.module.css";
import { Todo } from "./models/Todo";
import { TaskType, getTaskTypeFromString } from "./models/TaskType";
import TodoCard from "./components/TodoCard";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [taskType, setTaskType] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    const todo: Todo = {
      deadline: new Date(deadline),
      description,
      taskType: getTaskTypeFromString(taskType),
    };

    setTodos([todo, ...todos]);
    setDescription("");
    setDeadline("");
    setTaskType("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={addTodo}>
        <label htmlFor="description">Descrição:</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="deadline">Prazo:</label>
        <input
          type="date"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />

        <label htmlFor="task-type">Tipo:</label>
        <select
          name="task-type"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          {Object.values(TaskType).map((v, index) => (
            <option key={index} value={v}>
              {v}
            </option>
          ))}
        </select>

        <input type="submit" value="Adicionar" />
      </form>

      <div className={styles.todosArea}>
        {todos.length > 0 &&
          todos.map((t, index) => <TodoCard key={index} todo={t} />)}
      </div>
    </div>
  );
};

export default App;
