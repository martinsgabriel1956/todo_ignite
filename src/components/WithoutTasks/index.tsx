import styles from './styles.module.css';

import clipboardImage from "../../assets/clipboard.svg";

export const WithoutTasks = () => {
	return (
		<div className={styles.withoutTask}>
			<img src={clipboardImage} alt="Icone de prancheta cinza" />
			<span className={styles.withoutTaskMessage}>
				<strong>Você ainda não tem tarefas cadastradas</strong> <br />
				Crie tarefas e organize seus itens a fazer
			</span>
		</div>
	)
}