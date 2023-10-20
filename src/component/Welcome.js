import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <h1>Welcome Page</h1>
            <p>Welcome to the Page!</p>
            <Link to="/">
                <Button variant="primary">Go to home Page</Button>
            </Link>
            </>
    )
};