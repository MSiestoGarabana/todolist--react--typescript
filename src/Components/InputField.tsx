import React, { SetStateAction } from 'react'
import './componentStyles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAddToDo: (e: React.FormEvent) => void;
  
}

const InputField = ({todo, setTodo, handleAddToDo}: Props) => {
  return (
   <form className='input' onSubmit={handleAddToDo}>
    <input type='input'
    value={todo}
    onChange={
        (e)=>setTodo(e.target.value)
    }
     placeholder='Enter a task' 
     className='input__box'></input>
   <button className='input__submit' type='submit'>
    Go
   </button>
   </form>
  )
}

export default InputField
