import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const BlogPost = ({ title, content }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: '20px' }}>
      <CardContent>
          {title}
      </CardContent>
    </Card>
  );
};

export default BlogPost;
