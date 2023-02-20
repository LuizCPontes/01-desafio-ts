import styles from './Zero.module.css'

import cliBoardImg from '../assets/clipboard.svg'

export function Zero() {

    return (
        <main className={styles.main}>
            <img src={cliBoardImg} />
            <div className={styles.text}>Você ainda não tem tarefas cadastradas</div>
            <div>Crie tarefas e organize seus itens a fazer</div>
        </main>
    )
}