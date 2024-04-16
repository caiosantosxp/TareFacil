import style from './Task.module.css';
import clipboard from '../assets/Clipboard.png';
import { Job } from './Job';
import { useEffect, useState } from 'react';

interface TasksProps {
    tasks: Tasks[];
    handleDelteTasks: (tarefas: string) => void,
    handleCheckIs: (id: number) => void,
}

interface Tasks {
    id: number;
    task: string;
    done: boolean;
}

export function Task({ tasks, handleDelteTasks, handleCheckIs }: TasksProps) {
    const [completedTasksCount, setCompletedTasksCount] = useState(0)
    
    useEffect(() => {
        handleDoneTask();
    }, [tasks])

    function handleDoneTask(){
        const completedTasks = tasks.filter(task => task.done)
        setCompletedTasksCount(completedTasks.length)
    }
    
    return (
        <div className={style.Task}>
            <div className={style.visoTask}>
                <strong>Tarefas criadas <span>{tasks.length}</span></strong>
                <strong><p>Concluidas</p> <span>{completedTasksCount === 0 ? 0: `${completedTasksCount} de ${tasks.length}`}</span></strong>
            </div>
            <div className={style.TaskCenter} style={tasks.length === 0 ? {display: ''} : {display: 'none'} }>
                <img src={clipboard} alt="clipboard" />
                <strong>Voce ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
            <div className={style.job}>
                {tasks.reverse().map(task => {
                    return(
                        <Job 
                            key={task.id}
                            id = {task.id}
                            content={task.task} 
                            done={task.done}
                            handleDelteTasks = { handleDelteTasks }
                            handleCheckIs = { handleCheckIs }
                        />
                    )
                })}
            </div>
        </div>
    );
}
