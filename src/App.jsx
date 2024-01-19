import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './assets/sections/header'
import { Mainer} from './assets/sections/mainer'
import { Footer } from './assets/sections/footer'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const LSKEY = "MyTodoApp";

export const App = () => {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (todoText) => {
      const newTodos = [...todos, { id: uuidv4(), todo: todoText, completed: false }];
      setTodos(newTodos);
  };

  useEffect(() => {
    const storedTodos = window.localStorage.getItem(LSKEY + ".todos");
    console.log('retrieved todos', storedTodos);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log('storing todos', todos);
      window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    }
  }, [todos]);

  const clearTodos = () => {
    window.localStorage.removeItem(LSKEY + ".todos");
    setTodos([]);
  };

  return(
    <div className='app'>
      <Header addTodo={addTodo} />
      <Mainer todos={todos} setTodos={setTodos} />
      <button onClick={clearTodos}>Clear Todos</button>
      <Footer />
    </div>
  )
}
