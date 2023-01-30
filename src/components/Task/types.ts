import { TasksType } from "../../pages/Home/types";

export interface TaskProps {
  deleteTask: () => void;
  data: TasksType;
  completeTask: () => void;
}
