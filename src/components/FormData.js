import React, { useState } from 'react'
import { useEffect } from 'react';
export default function FormData() {
  // intially the object is empty for all the field 
  const[data, setData] = useState({name:'', age:'', gender:''})
  //for storing the data of every time use renter
  const[user, setUser] = useState([]);

  const changeHandler = (event)=>{
    setData({...data, [event.target.name]:event.target.value})
    console.log(data);
  }
  useEffect(() => {
    if (data.name && data.age && data.gender) {
      setUser([...user, data]);
    }
  }, [data]);

  return (
    <div>
      <h2>Enter user data</h2>
      <label htmlFor="name">Name:</label>
      <input placeholder='Enter user name' value={data.name} name="name" onChange={changeHandler}></input>
      <div>
      <label htmlFor="name">Age:</label>
      <input placeholder='Enter user age' value={data.age} name="age" onChange={changeHandler}></input>
      </div>
      <label htmlFor="name">Gender:</label>
      <input placeholder='Enter user gender' value={data.gender} name="gender" onChange={changeHandler}></input>
      <button>Submit</button>
      <h2>User Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
