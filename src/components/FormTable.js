import React, { useState } from 'react'
import './FormData.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { deleteUser } from '../store/userSlice'
import { editUser } from '../store/userSlice'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
export default function FormTable() {
  const[showModal, setShowModal]=useState(false)
  const[data, setData]=useState({ name: '', age: '', company: '', feedback: '', id: 'null' })
  const users = useSelector(state=>state.user)
  const dispatch = useDispatch()
  const removeUser = (id)=>{
    dispatch(deleteUser(id))
  }
  const editUserfun = (item)=>{
    setData(item)
    setShowModal(true)
  }
  const handleSave = () => {
    dispatch(editUser({ id: data.id, updatedUserData: data }));
    setData({ name: '', age: '', company: '', feedback: '', id: null });
    setShowModal(false);
  };

  const changeHandler = (event)=>{
    setData({ ...data, [event.target.name]: event.target.value });
  }
  return (
    <div>
       <div className="user-table">
        <h2>User Data Table</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Company</th>
              <th>Feedback</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.company}</td>
                <td>{item.feedback}</td>
                <td><Button onClick={()=>removeUser(item.id)}>Delete User</Button></td>
                <td><Button onClick={()=>editUserfun(item)}>Edit User</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showModal}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <h2>Enter user data</h2>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input placeholder='Enter user name' type='text' value={data.name} name="name" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input placeholder='Enter user age' type='number' value={data.age} name="age" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company:</label>
                <input placeholder='Enter user Company name'  type='text' value={data.company} name="company" onChange={changeHandler} required></input>
              </div>
              <div className="form-group">
                <label htmlFor="feedback">Feeedback:</label>
                <input placeholder='Enter user feedback'  type='text' value={data.feedback} name="feedback" onChange={changeHandler} required></input>
              </div>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
    </div>
  )
}
