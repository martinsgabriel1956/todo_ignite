import styles from './styles.module.css';
import { TaskProps } from "./types";

import TrashIcon from "../../assets/trash.svg"

export const Task: React.FC<TaskProps> = ({ deleteTask, data, completeTask }) => {
  const isCompleted = data.isCompleted === true;
  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer} >
          <label htmlFor="check"></label>
          <input type="checkbox" id="check" onClick={completeTask} />
        </div>
        <p className={isCompleted ? styles.isChecked : ""}>{data.title}</p>
      </div>
      <button onClick={deleteTask}>
        <img src={TrashIcon} alt="Icone de lixeira cinza" />
      </button>
    </div>
  )
}