import React, { useState } from 'react';
import './App.css';
import InputField from './Components/InputField';
import { Todo } from './Components/model';
import TodoList from './Components/TodoList';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleAddToDo = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodoList([...todoList,{id:Date.now(), todo, isDone: false}])
      setTodo("");
    }
  }
  console.log(todoList)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAddToDo={handleAddToDo}/>
      {todoList.map((t) => (
        <li>{t.todo}</li>
      ))}
      <TodoList todoList={todoList} setTodoList={setTodoList}/>
      </div>
  );
}

export default App;
