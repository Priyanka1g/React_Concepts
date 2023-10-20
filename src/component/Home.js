import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <Link to="/welcome">
                <Button variant="primary">Go to Welcome Page</Button>
            </Link>
            </>
    )
};


