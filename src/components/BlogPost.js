import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ title, content }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
