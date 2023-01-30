import { useState } from "react";
import { Trash } from "phosphor-react";
import styles from './styles.module.css';

export const Task: React.FC = () => {
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
        <p className={isChecked ? styles.isChecked : ""}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      </div>
      <button className="">
        <img src="/src/assets/trash.svg" alt="Fala comigo" />
      </button>
    </div>
  )
}