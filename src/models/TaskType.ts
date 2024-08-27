import clean from "../assets/img/clean.png";
import healthcare from "../assets/img/healthcare.png";
import housecare from "../assets/img/housecare.png";
import workout from "../assets/img/workout.png";
import undefined from "../assets/img/undefined.png";

export enum TaskType {
  CLEANING = "Limpeza",
  HEALTHCARE = "Cuidados com a saúde",
  HOUSECARE = "Manutenção domiciliar",
  WORKOUT = "Exercícios físicos",
}

export const getTaskTypeFromString = (taskTypeString: string): TaskType => {
  const taskType = Object.values(TaskType).find(
    (value) => value === taskTypeString
  );

  if (taskType) {
    return taskType;
  }

  return TaskType.CLEANING;
};

export const taskTypeIconHelper = (taskType: TaskType) => {
  switch (taskType) {
    case TaskType.CLEANING:
      return clean;
    case TaskType.HEALTHCARE:
      return healthcare;
    case TaskType.HOUSECARE:
      return housecare;
    case TaskType.WORKOUT:
      return workout;
    default:
      return undefined;
  }
};
