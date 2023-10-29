import React from 'react'
import './FormData.css'
export default function FormTable({users}) {
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
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.company}</td>
                <td>{item.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
