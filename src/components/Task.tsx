import { Circle, CheckCircle, Trash } from 'phosphor-react'

import styles from './Task.module.css'

export interface ChangeProps {
    postId: string,
    newDone: boolean
}

interface TaskProps {
    isDone: boolean,
    content: string,
    postId: string,
    onDeleteTask: (postId: string) => void
    onChangeTaskStatus: (data: ChangeProps) => void
}

export function Task({ isDone = false, content, postId, onDeleteTask, onChangeTaskStatus }: TaskProps) {

    function handleDeleteTask() {
        onDeleteTask(postId)
    }

    function handleChangeState() {
        const newDone = isDone ? false : true
        onChangeTaskStatus({ postId, newDone })
    }

    return (
        <li>
            <button onClick={handleChangeState} className={isDone ? styles.checked : styles.notChecked}>{isDone ? <CheckCircle weight="fill" size={24} /> : <Circle size={24} />}</button>
            <div className={isDone ? styles.doneText : styles.notDoneText}>
                {content}
            </div>
            <button onClick={handleDeleteTask} className={styles.trash}><Trash size={24} /></button>
        </li>
    )
}