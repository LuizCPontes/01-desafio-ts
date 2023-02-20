import { useState } from 'react'

import { Header } from './components/Header'
import { TaskCreator } from './components/TaskCreator'
import { TaskInfo } from './components/TaskInfo'
import { Task, ChangeProps } from './components/Task'
import { Zero } from './components/Zero'

import './global.css'
import styles from './App.module.css'

export interface AppTaskProps {
    id: string
    done: boolean
    content: string
}

export function App() {

    const [tasks, setTasks] = useState<any[]>([])

    function deleteTask(taskToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== taskToDelete
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function changeTaskStatus({ postId, newDone }: ChangeProps) {
        const tasksUpdated = tasks.reduce((result, item: AppTaskProps) => {
            item.id === postId ? item.done = newDone : null
            result.push(item)
            return result
        }, [])

        setTasks(tasksUpdated)
    }

    function addTask(data: AppTaskProps) {
        setTasks([...tasks, data])
    }

    const tasksNumber = tasks.length
    let doneTasksNumber = 0

    if (tasksNumber > 0) {
        const doneTasks = tasks.filter(task => {
            return task.done === true
        })

        doneTasksNumber = doneTasks.length
    }

    return (
        <div>
            <Header />

            <main>

                <TaskCreator onAddTask={addTask} />

                <div className={styles.tasks}>

                    <TaskInfo total={tasksNumber} done={doneTasksNumber} />

                    <div className={styles.taskList}>
                        <ul>
                            {tasks.length > 0 ? tasks.map(task => {
                                return (
                                    <Task
                                        key={task.id}
                                        content={task.content}
                                        isDone={task.done}
                                        onDeleteTask={deleteTask}
                                        postId={task.id}
                                        onChangeTaskStatus={changeTaskStatus}
                                    />
                                )
                            }) : <Zero />}
                        </ul>
                    </div>

                </div>
            </main >
        </div >
    )
}