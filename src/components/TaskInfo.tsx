import styles from './TaskInfo.module.css'

interface TaskInfoProps {
    total: number,
    done: number
}

export function TaskInfo({ total, done }: TaskInfoProps) {

    return (
        <div className={styles.info}>
            <div>
                Tarefas criadas
                <span>{total}</span>
            </div>
            <div>
                Concluídas
                <span>{total > 0 ? `${done} de ${total}` : 0}</span>
            </div>
        </div>
    )
}