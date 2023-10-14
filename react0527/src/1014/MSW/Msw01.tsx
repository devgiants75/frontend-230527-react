import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

// mui 설치 코드
// npm install @mui/material @emotion/react @emotion/styled axios


//! Mock Server Worker(MSW)
// : Service Worker를 사용하여 서버를 향한 실제 네트워크 요청을 가로채서 모의 응답을 보내주는 Mocking API

// : 서비스 로직을 직접 수정하지 않아도 사용 가능
// : 모든 종류의 네트워크 라이브러리(axios, react-query 등)와 함께 사용 가능

interface Post {
  id: string;
  title: string;
  content: string;
}

export default function Msw01() {
  const [postData, setPostData] 
    = useState<Omit<Post, 'id'>>( { title: '', content: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/posts', postData);
      console.log('Post created', response.data);
    } catch (error: any) {
      setError('Failed to create post!');
      console.error('An error occured while creating the post : ', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom>
          Create New Post
        </Typography>

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='title'
          label='Title'
          name='title'
          autoFocus
          value={postData.title}
          onChange={handleInputChange}
        />

        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='content'
          label='Content'
          name='content'
          autoFocus
          value={postData.content}
          onChange={handleInputChange}
        />

        {error && (
          <Typography color='error'>
            {error}
          </Typography>
        )}

        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          disabled={loading}
        >
          {loading ? 'Creating' : 'Create Post'}
        </Button>
      </form>
    </>
  )
}
