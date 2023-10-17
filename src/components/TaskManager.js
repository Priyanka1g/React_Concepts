import React, { useState } from 'react'
import { useEffect } from 'react';
export default function TaskManager() {
    const[task, setTask] = useState('')
    const[tasklist, setTasklist] = useState([]);
    useEffect(() => {
        const savedTasks = JSON.parse(localStorage.getItem('task')) || [];
        setTasklist(savedTasks)
      }, []);
    
      // Save tasks to localStorage whenever tasks state changes
      useEffect(() => {
        localStorage.setItem('task', JSON.stringify(task));
      }, [task]);

    const inputHandler =(event)=>{
        setTask(event.target.value)
        console.log(event.target.value);
        // console.log(event.target.value);
    }
    const addTaskHandler=()=>{
       setTasklist([task, ...tasklist]);
    //    console.log(tasklist)
        setTask('');
    }
  return (
    <div>
        <input placeholder='Enter your task' value={task} onChange={inputHandler}></input>
        <button onClick={addTaskHandler}>Add task</button>
        {/* for showing the list of users task  */}
        {tasklist.map((item)=><p>{item}</p>)}
    </div>
  )
}
