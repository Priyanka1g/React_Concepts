import React, { useState } from 'react'
export default function Counter(props) {
    // using use state for changing the state when user click the button 
    const [count, setCount] = useState(props.initialval);
    const incrementHandler =()=>{
        setCount(count+1);
    }
    const decrementHandler =()=>{
        if(count==0){
           setCount(0);
        }
        else{
            setCount(count-1);
        }
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