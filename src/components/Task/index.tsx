import { useState } from "react";
import styles from './styles.module.css';
import { TaskProps } from "./types";

export const Task: React.FC<TaskProps> = ({ deleteTask, title }) => {
  const [isChecked, setIsChecked] = useState(false);

  function handleChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={styles.taskContainer}>
      <div className={styles.taskContent}>
        <div className={styles.checkboxContainer} >
          <label htmlFor="check"></label>
          <input type="checkbox" id="check" onClick={handleChecked} />
          {isChecked && (
            <img src="/src/assets/check.svg" alt="Fala comigo" />
          )}
        </div>
        <p className={isChecked ? styles.isChecked : ""}>{title}</p>
      </div>
      <button className="" onClick={deleteTask}>
        <img src="/src/assets/trash.svg" alt="Fala comigo" />
      </button>
    </div>
  )
}