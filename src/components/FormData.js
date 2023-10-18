import React, { useState } from 'react'
import { useEffect } from 'react';
import './FormData.css'
export default function FormData() {
  // intially the object is empty for all the field 
  const [data, setData] = useState({ name: '', age: '', company: '' })
  //for storing the data of every time use renter
  const [user, setUser] = useState([]);

  // useEffect(() => {
  //   if (data.name && data.age && data.company) {
  //     setUser([...user, ]);
  //   }
  // }, [data]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    console.log(data);
  }
  const submitHandler = () => {
    setUser([...user, data]);
    setData({ name: '', age: '', company: '' })
  }
  return (
    <div className="form-container">
      <div className="form-inputs">

        <h2>Enter user data</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder='Enter user name' type='text' id='name' value={data.name} name="name" onChange={changeHandler} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input placeholder='Enter user age' type='number' id='age' value={data.age} name="age" onChange={changeHandler} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input placeholder='Enter user Company name' id='company' type='text' value={data.company} name="company" onChange={changeHandler} required></input>
        </div>
        <button onClick={submitHandler}>Submit</button>
      </div>
      <div className="user-table">
        <h2>User Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {user.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.company}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div >
  )
}
