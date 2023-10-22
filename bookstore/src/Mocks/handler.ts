import { rest } from 'msw';
import { userData } from './MockData/user.data';

export const handlers = [
  rest.post('api/login', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ userData }));
  }),
  // 다른 API 핸들러
]