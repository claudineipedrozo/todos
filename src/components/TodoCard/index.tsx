import styles from "./styles.module.css";
import { taskTypeIconHelper } from "../../models/TaskType";
import { Todo } from "../../models/Todo";

type Props = {
  todo: Todo;
};

const TodoCard = ({ todo }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.taskType}>
        <img src={taskTypeIconHelper(todo.taskType)} alt={todo.taskType} />
      </div>

      <div className={styles.taskInfo}>
        <span className={styles.taskDescription}>{todo.description}</span>
        <span className={styles.taskDeadline}>
          {todo.deadline.toLocaleDateString()}
        </span>
      </div>
    </div>
  );
};

export default TodoCard;
