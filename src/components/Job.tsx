import style from './Job.module.css'
import { Trash } from 'phosphor-react'

interface Content {
  content: string;
  done: boolean;
  id: number
  handleDelteTasks: (tarefas: string) => void,
  handleCheckIs: (id: number) => void
}

export function Job ({ content, done, id, handleDelteTasks, handleCheckIs }:Content){

  function handleEventDeleteTask(){
    handleDelteTasks(content)
  }

  function handleEventCheckTask(){
    handleCheckIs(id)
  }
  return(
    <div className={style.container}>
      <div className={style.checkbox}>
        <input
          name='checkbox1'
          checked={done}
          type="checkbox"
          onChange={handleEventCheckTask}
        />
        <label htmlFor='checkbox1' ></label>
      </div>
      <p className={style.textochecked} style={done ? {textDecorationLine: 'line-through', color:'#808080'} : undefined}>
        {content}
      </p>
      <button onClick={handleEventDeleteTask}>
        <Trash size={24} />
      </button>
    </div>
  )
}
