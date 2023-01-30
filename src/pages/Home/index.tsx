import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';
import { Task } from '../../components/Task';

export const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src="/src/assets/logo.svg" alt="Todo Logo" />
      </header>
      <form action="">
        <div className={styles.inputContainer}>
          <label htmlFor="" />
          <input type="text" placeholder="Adicione uma nova tarefa" />
        </div>
        <button className={styles.createToDoButton}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
      <div className={styles.tasksContainer}>
        <div className={styles.typeTasks}>
          <span className={styles.createdTask}>Tarefas criadas <span className={styles.badge}>0</span></span>
          <span className={styles.concludedTask}>Concluídas <span className={styles.badge}>0</span></span>
        </div>

        <div className={styles.withTask}>
          <Task />
          <Task />
          <Task />
        </div>

        {/* <div className={styles.withoutTask}>
          <img src="/src/assets/clipboard.svg" alt="" />
          <span className={styles.withoutTaskMessage}>
            <strong>Você ainda não tem tarefas cadastradas</strong> <br />
            Crie tarefas e organize seus itens a fazer
          </span>
        </div> */}
      </div>
    </main>
  )
}