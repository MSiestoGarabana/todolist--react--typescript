import React from 'react'
import { Todo } from './model';
import './componentStyles.css'
import SingleTodo from './SingleTodo';

interface Props{
    todoList: Todo[];
    setTodoList:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todoList, setTodoList}: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">
          Active tasks
        </span>
        {
          todoList.map((todo) => (
            <SingleTodo
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}/>
          ))
        }
      </div>
      <div className="todos remove">
      <span className="todos__heading">
      Completed tasks        
      </span>
        {
          todoList.map((todo) => (
            <SingleTodo
            todo={todo}
            todoList={todoList}
            setTodoList={setTodoList}
            key={todo.id}/>
          ))
        }
        </div>      
    </div>
  )
}

export default TodoList;
