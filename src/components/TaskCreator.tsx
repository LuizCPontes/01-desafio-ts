import { PlusCircle } from 'phosphor-react'
import { useState, FormEvent, ChangeEvent, InvalidEvent, InputHTMLAttributes } from 'react'
import { AppTaskProps } from '../App'
import nextId from "react-id-generator";

import styles from './TaskCreator.module.css'

interface TaskCreatorProps {
    onAddTask: (data: AppTaskProps) => void
}

export function TaskCreator({ onAddTask }: TaskCreatorProps) {

    const [inputText, setInputText] = useState('')
    const taskId = nextId()

    function handleInputChange(event: ChangeEvent<any>) {
        event.target.setCustomValidity('')
        setInputText(event.target.value)
    }

    function handleNewTask(event: FormEvent) {
        event.preventDefault()

        const newTask = {
            id: taskId,
            done: false,
            content: inputText
        }

        onAddTask(newTask)
        setInputText('')
    }

    function handleNewTaskInvalid(event: InvalidEvent<any>) {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    return (
        <form onSubmit={handleNewTask} className={styles.criar} >
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={handleInputChange}
                onInvalid={handleNewTaskInvalid}
                value={inputText}
                required
            />
            <button type="submit">Criar <PlusCircle /></button>
        </form>
    )
}