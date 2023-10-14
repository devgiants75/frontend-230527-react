// MSW 설정 예시(로그인)
import { setupWorker, rest } from "msw";

const worker = setupWorker(
  // 첫 번째 파라미터: 요청 경로
  // 두 번째 파라미터: response resolver 콜백 함수 지정
  // - req(매칭되는 요청에 대한 정보)
  // - res(모의 응답을 만들 수 있는 유틸리티)
  // - ctx(모의 응답의 HTTP 상태 코드, 헤더, 바디 등을 만들 수 있는 함수들)
  rest.post('/login', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('username');

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authenticated',
        }),
      )
    }
    return res(ctx.json({ name: 'Seung Ah' }));
  }),
);

// 워커 시작: 페이지에 로드 시 MSW를 활성화
worker.start();