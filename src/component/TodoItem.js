import React from 'react'

export default function TodoItem(props) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '20vh',
            }}
        >
            {/* <h1>i m todoitems</h1> */}
            <li>{props.todo.text}</li>
        </div>
    )
}
