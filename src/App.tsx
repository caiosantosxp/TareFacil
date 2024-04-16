import { useState } from "react";
import { Header } from "./components/Header";
import { NewTask } from "./components/NewTask";
import { Task } from "./components/Task";

import './global.css'

interface Tasks {
  id: number;
  task: string;
  done: boolean;
}

export function App() {
  const [ tasks , setTask ] = useState<Tasks[]>([]);

  function handleCreatedNewTask(valor: string){
    var newTask = {
      "id" : tasks.length + 1,
      "task" : valor,
      "done" : false
    }
    setTask([...tasks, newTask])
  }

  function handleDeleteTask(tarefas: string){
    const tasksWithOutDeleteOne = tasks.filter(task => {
      return task.task !== tarefas;
    })
    setTask(tasksWithOutDeleteOne)
  }

  function handleCheckIs(id: number){
    const updateTasks = tasks.map(task => {
      if (task.id === id){
        return {...task, done: !task.done}
      }
      return task;
    })
    setTask(updateTasks)
  }

  
  return (
    <div>
      <Header />
      <NewTask handleCreatedNewTask= { handleCreatedNewTask } />
      <Task 
      tasks = {tasks}
      handleDelteTasks = { handleDeleteTask }
      handleCheckIs = { handleCheckIs }
      />
    </div>
  )
}