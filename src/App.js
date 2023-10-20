import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        // console.log(posts);
        setPosts(data);
        console.log(posts);
      });
  }, []);

  return (
    <Container className="mt-4">
      <h1>Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4} className="mb-3">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {/* <h1>hi</h1> */}
      </Row>
    </Container>
  );
}

export default App;