import React, { useState } from 'react'
export default function TaskManager() {
    const[task, setTask] = useState('')
    const inputHandler =(event)=>{
        setTask(event.target.value)
        console.log(event.target.value);
        // console.log(event.target.value);
    }
    const addTaskHandler=()=>{
        setTask('');
    }
  return (
    <div>
        <input placeholder='Enter your task' value={task} onChange={inputHandler}></input>
        <button onClick={addTaskHandler}>Add task</button>
    </div>
  )
}
