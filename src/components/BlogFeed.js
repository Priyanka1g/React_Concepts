import React from 'react';
import BlogPost from './BlogFeed';

const blogPosts = [
  { id: 1, title: 'First Post', content: 'Content of the first post.' },
  { id: 2, title: 'Second Post', content: 'Content of the second post.' },
  { id: 3, title: 'Third Post', content: 'Content of the third post.' },
];

const BlogFeed = () => {
  return (
    <div style={{ padding: '20px' }}>
      {blogPosts.map((post) => (
        <BlogPost key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default BlogFeed;

