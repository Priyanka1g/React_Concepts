import React from 'react'
import TodoForm from './component/TodoForm'
import TodoList from './component/TodoList'
// import Typography from "@material-ui/core/Typography"
export default function App() {
  // list of all the todo items 
  const todo = ["React learning", "Props ", "List rendering", "keys", "Conditional Rendering"]
  const listitemsn = todo.map((item, index) => <li key={index}>{item}</li>)
  const isloggedin = true;
  function Greet(props) {
    if (props.isloggedin) {
      return <h1>You logged in</h1>
    } else {
      return <h1>user logged out</h1>
    }
  }
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
      {/* {
          todo.map((item) =>
            <li>{item}</li>)
        } */}

      <Greet isloggedin={true} />
      {isloggedin?
      <ul>{listitemsn }</ul>:<h1>you logged out</h1>
    }
    </div>
  )
}
