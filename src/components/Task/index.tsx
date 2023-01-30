import styles from './styles.module.css';
import { TaskProps } from "./types";

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
        <img src="/src/assets/trash.svg" alt="Fala comigo" />
      </button>
    </div>
  )
}