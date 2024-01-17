import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './assets/sections/header'
import { Mainer} from './assets/sections/mainer'
import { useState } from 'react'

export const App = () => {
  const initialTodos = [
    { text: "Learn React", completed : false },
    {text: "Be Awesome!", completed : false },
    {text: "Code a page!", completed : false }
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todoText) => {
      const newTodos = [...todos, { text: todoText, completed: false }];
      setTodos(newTodos);
  };
  return(
    <div className='app'>
      <Header addTodo={addTodo} />
      <Mainer todos={todos} setTodos={setTodos} />
    </div>
  )
}
