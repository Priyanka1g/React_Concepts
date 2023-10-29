import React, { useState } from 'react'
import { useEffect } from 'react';
import './FormData.css'
import { Link } from 'react-router-dom';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FormData({onAddItem}) {
  // intially the object is empty for all the field 
  const [data, setData] = useState({ name: '', age: '', company: '', feedback:'' })
  //for storing the data of every time use renter
  // const [user, setUser] = useState([]);

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
    if (data.name && data.age && data.company&&data.feedback) {
      onAddItem(data)
      setData({ name: '', age: '', company: '', feedback:''})
    } else {
      alert('Please fill out all fields before submitting.');
    }
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
        <div className="form-group">
          <label htmlFor="feedback">Feeedback:</label>
          <input placeholder='Enter user feedback' id='feedback' type='text' value={data.feedback} name="feedback" onChange={changeHandler} required></input>
        </div>
        <button onClick={submitHandler} style={{ marginTop: '20px' }}>Submit</button>
      </div>
      <Link to="/userdata">
        <Button variant="primary" style={{ marginTop: '20px' }}>Go to User Data</Button>
      </Link>
    </div >
  )
}