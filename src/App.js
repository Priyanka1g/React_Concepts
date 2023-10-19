import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import BlogFeed from './components/BlogFeed';
import DenseAppBar from './components/DenseAppBar';
// import PrimarySearchAppBar from './components/PrimarySearchAppBar';

const App = () => {
  return (
    <Container component="main" maxWidth="md">
      <div>
        <DenseAppBar/>
        <BlogFeed />
      </div>
    </Container>
  );
};

export default App;


