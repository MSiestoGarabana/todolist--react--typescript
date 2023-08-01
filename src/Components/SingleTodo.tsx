import React, { useState } from 'react'
import { Todo } from './model'
import { AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import './componentStyles.css'

type Props = {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todoList, setTodoList}: Props) => {

  const [isBeingEdited, setIsBeingEdited] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  
  const handleDone = (id: number) => {
    setTodoList(
      todoList.map((todo) => 
      todo.id === id?{...todo, isDone: !todo.isDone } : todo
        )
      );
  };

  const handleDelete = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent, id:number) => {
    e.preventDefault();
    setTodoList(todoList.map((todo) => (
      todo.id === id ? {...todo, todo:editTodo} : todo
    )));
    setIsBeingEdited(false)
  }
  
  
  return (
  <form className='todos__single' onSubmit={(e) => handleEdit(e, todo.id)}>
    {isBeingEdited ? (
        <input 
          value={editTodo}
          onChange={(e) =>setEditTodo(e.target.value)}
          className='todos__single--text'
        />
      ) : (
      todo.isDone? (
          <s className="todos__single--text">{todo.todo}</s>
        ) : (
          <span className="todos__single--text">{todo.todo}</span>
        )
      )
    }

      
        <div>
          <span className='icon' onClick={ ()=>{
            if(!isBeingEdited && !todo.isDone){
              setIsBeingEdited(!isBeingEdited)
            }}
          }>
            <AiFillEdit/>
          </span>
          <span className='icon' onClick={()=> handleDelete(todo.id)}>
            <AiFillDelete/>
          </span>
          <span className='icon' onClick={()=> handleDone(todo.id)}>
            <MdDone/>
          </span>
        </div>
      
    </form>
  )
  
}

export default SingleTodo
