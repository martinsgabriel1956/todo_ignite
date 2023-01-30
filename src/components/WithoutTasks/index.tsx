import styles from './styles.module.css';

export const WithoutTasks = () => {
	return (
		<div className={styles.withoutTask}>
			<img src="/src/assets/clipboard.svg" alt="" />
			<span className={styles.withoutTaskMessage}>
				<strong>Você ainda não tem tarefas cadastradas</strong> <br />
				Crie tarefas e organize seus itens a fazer
			</span>
		</div>
	)
}