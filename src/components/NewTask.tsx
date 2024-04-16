import style from './NewTask.module.css'
import plus from '../assets/plus.svg'
import { ChangeEvent, useState } from 'react';

interface TasksProps {
  handleCreatedNewTask: (valor: string) => void,
}

export function NewTask({ handleCreatedNewTask }: TasksProps){
  const [valorInput, setValorInput] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>){
    setValorInput(event.target.value);
  }

  function handleSendNewTask(){
    handleCreatedNewTask(valorInput)
    setValorInput('')
  }

  return(
    <div className={style.NewTask}>
      <input type="text" value={valorInput} onChange={handleChange} placeholder='Adicione uma nova tarefa'/>
      <button onClick={handleSendNewTask}>Criar <img src={plus} alt=""  /></button>
    </div>
  )
}