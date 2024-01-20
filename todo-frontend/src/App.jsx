import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // fetch("http://localhost:3000/todos")
  //   .then(async function(response){
  //     const data = await response.json();
  //     setTodos(data.todos);
  //   })  
  // due to this approach continuous get request going

  return (
    <div>
     <CreateTodo/>
     <Todos todos = {todos}></Todos>
    </div>
  )
}

export default App
