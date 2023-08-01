import React, {  useRef } from 'react'
import './componentStyles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAddToDo: (e: React.FormEvent) => void;
  
}

const InputField = ({todo, setTodo, handleAddToDo}: Props) => {
  
  const inputRef = useRef<HTMLInputElement>(null);

  return (
   <form className='input' onSubmit={(e)=>{
    handleAddToDo(e);
    inputRef.current?.blur();
   }}>
    <input
    ref={inputRef}
    type='input'
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
