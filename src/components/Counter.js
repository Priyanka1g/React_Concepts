import React, { useState } from 'react'
export default function Counter() {
    // using use state for changing the state when user click the button 
    const [count, setCount] = useState(0);
    const incrementHandler =()=>{
        setCount(count+1);
    }
    const decrementHandler =()=>{
        setCount(count-1);
    }
  return (
    <div>
      <h1>Counter Application</h1>
      <h1>{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  )
}