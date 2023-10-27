// FormTable.js
import React from 'react';
import { useSelector } from 'react-redux';

export default function FormTable() {
  const users = useSelector((state) => state.user);

  return (
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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.company}</td>
              <td>{user.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
