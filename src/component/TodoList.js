import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    console.log(props.todos, 'abc')
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
            <h4>
                {props.todos.map((todo, index) => (<TodoItem key={index} todo={todo} />))}
            </h4>
        </div>
    )
}
