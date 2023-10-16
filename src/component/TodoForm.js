import React from 'react'
import { useState } from 'react'
export default function TodoForm({onAdditem}) {
    const[todo, setTodo] = useState('')
    const handleTodoItem = (event)=>{
        setTodo(event.target.value)
        console.log(event.target.value)
    }
    const handleAddTodo=()=>{
        onAdditem(todo);
        setTodo('');
    }
    console.log(todo);
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20vh',
            }}
        >
            {/* <h1>I m TodoForm</h1> */}
            <input type="text" placeholder='Add your item here' value={todo} onChange={handleTodoItem}></input>
            <button onClick={handleAddTodo}>Add item</button>
        </div>
    )
}
