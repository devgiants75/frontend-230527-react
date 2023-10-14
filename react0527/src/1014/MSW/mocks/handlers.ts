import { rest } from 'msw';

interface Post {
  id: string,
  title: string;
  content: string;
}
const posts: Post[] = [
  {
    id: '1',
    title: '게시글1',
    content: '안녕하세요'
  },
  {
    id: '2',
    title: '게시글2',
    content: '안녕'
  },
  {
    id: '3',
    title: '게시글3',
    content: '반갑습니다.'
  },
];

export const handlers = [
  // 포스트 목록
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(posts));
  }),

  // 포스트 추가
  rest.post<Post>('/posts', (req, res, ctx) => {
    // req.body가 적절한 형태를 가지고 있는지 확인
    if (!req.body || typeof req.body.title !== 'string' || typeof req.body.content != 'string') {
      return res(
        ctx.status(400),
        ctx.json({ message: 'Invalid request body' })
      );
    }

    const newPost: Post = {
      id: (posts.length + 1).toString(),
      title: req.body.title,
      content: req.body.content
    }
    posts.push(newPost);

    return res(
      ctx.status(201)
      );
  })
];