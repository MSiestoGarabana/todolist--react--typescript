import React from 'react'
import { Todo } from './model'

type Props = {
    todo: Todo,
    todoList: Todo[],
    setTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({todo, todoList, setTodoList}: Props) => {
  return (
    <div>
      
    </div>
  )
}

export default SingleTodo
