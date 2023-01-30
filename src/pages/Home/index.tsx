import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './styles.module.css';
import { Task } from '../../components/Task';
import { TasksType } from './types';

export const Home: React.FC = () => {
  const [newTask, setNewTask] = useState<TasksType[]>([]);
  const [taskTitle, setTaskTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    const titleIsEmpty = taskTitle.trim() === "";

    if (titleIsEmpty) {
      return;
    }

    const task = {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false,
    }
    setNewTask(prevState => [...prevState, task]);
    setTaskTitle("");
  }

  function handleRemoveTask(id: string) {
    setNewTask(prevState => prevState.filter(task => task.id !== id));
  }

  function handleToggleTaskCompletion(id: string) {
    const newTasks = newTask.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setNewTask(newTasks);
  }

  const completedTasksAmount = newTask.filter((task) => task.isCompleted === true).length;

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <img src="/src/assets/logo.svg" alt="Todo Logo" />
      </header>
      <form onSubmit={handleCreateNewTask}>
        <div className={styles.inputContainer}>
          <label htmlFor="" />
          <input value={taskTitle} onChange={(event) => setTaskTitle(event.target.value)} type="text" placeholder="Adicione uma nova tarefa" />
        </div>
        <button className={styles.createToDoButton}>
          Criar
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
      <div className={styles.tasksContainer}>
        <div className={styles.typeTasks}>
          <span className={styles.createdTask}>Tarefas criadas <span className={styles.badge}>{newTask.length}</span></span>
          <span className={styles.concludedTask}>Concluídas <span className={styles.badge}>{newTask.length > 0 ? `${completedTasksAmount} de ${newTask.length}` : 0}  </span></span>
        </div>
        {newTask!.length > 0 ? (
          <div className={styles.withTask}>
            {newTask.map((task) => (
              <Task completeTask={() => handleToggleTaskCompletion(task.id)} key={task.id} data={task} deleteTask={() => handleRemoveTask(task.id)} />
            ))}
          </div>
        ) : (
          <div className={styles.withoutTask}>
            <img src="/src/assets/clipboard.svg" alt="" />
            <span className={styles.withoutTaskMessage}>
              <strong>Você ainda não tem tarefas cadastradas</strong> <br />
              Crie tarefas e organize seus itens a fazer
            </span>
          </div>
        )}
      </div>
    </main>
  )
}