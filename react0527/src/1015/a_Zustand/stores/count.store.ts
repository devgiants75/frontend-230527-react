// zustand의 create를 사용하여 store 생성
import create from 'zustand';

interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

// create 안에는 기본값을 갖는 state를 설정
// , 함수명 형식으로 변경할 state에 대해 작성

// create: Zustand 스토어를 생성하는 함수
// set: 상태를 변경하는 함수
// state: 현재 스토어의 상태
export const useCountStateStore = create<CountState>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));