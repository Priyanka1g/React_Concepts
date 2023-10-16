import React from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'
// import Typography from "@material-ui/core/Typography"
export default function App() {
  // list of all the todo items 
  const todo = ["React learning", "Props ", "List rendering", "keys", "Conditional Rendering"]
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '20vh',
        }}
      >
        <h2>Todolist Application</h2>
      </div>
      {/* rendering list items using map */}
      {
          todo.map((item) =>
            <li>{item}</li>)
        }
      {/* <TodoForm />
      <TodoList /> */}
    </div>
  )
}
