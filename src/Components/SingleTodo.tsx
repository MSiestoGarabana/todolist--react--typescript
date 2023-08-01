import React from 'react'
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
  const handleDone = (id: number) => {
    setTodoList(todoList.map((todo) => todo.id === id?{...todo, isDone: !todo.isDone } : todo))
  }
  
  return <form className='todos__single'>
    {
      todo.isDone? (
  <s className="todos_single--text">{todo.todo}</s>

      ): (
  <span className="todos_single--text">{todo.todo}</span>
      )
    }
      
        <div>
          <span className='icon'>
            <AiFillEdit/>
          </span>
          <span className='icon'>
            <AiFillDelete/>
          </span>
          <span className='icon' onClick={()=> handleDone(todo.id)}>
            <MdDone/>
          </span>
        </div>
      
    </form>
  
}

export default SingleTodo
