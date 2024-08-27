import { TaskType } from "./TaskType";

export type Todo = {
  description: string;
  deadline: Date;
  taskType: TaskType;
};
