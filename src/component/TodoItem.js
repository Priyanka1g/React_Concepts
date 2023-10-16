import React from 'react'

export default function TodoItem(props) {
    return (
        <div>
            {/* <h1>i m todoitems</h1> */}
            <li>{props.todo}</li>
        </div>
    )
}
