import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20vh',
            }}
        >
            {/* <h1>I am todolist</h1> */}
            <ul>
                {props.todos.map((todo, index)=>(<TodoItem key={index} todo={todo}/>))}
            </ul>
        </div>
    )
}
