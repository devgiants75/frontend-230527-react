import { create } from "zustand";
import { UserType } from "../interfaces/user.type";

interface DataState {
  // API로부터 가져온 데이터를 저장할 프로퍼티
  data: UserType[] | null;
  // API로부터 데이터를 가져오는 비동기 함수
  fetchData: () => Promise<void>;
}

// zustand 스토어 생성
// create 메서드는 스토어를 초기화하기 위해서 콜백 함수를 인자로 전달받음.
export const useDataStore = create<DataState>((set) => ({
  // 초기 data 프로퍼티의 값을 null로 설정
  data: null,

  // fetchData 메서드 정의
  // API로부터 데이터를 비동기적으로 가져와서
  // , 스토어의 data 프로퍼티에 저장
  fetchData: async () => {
    try {
      // fetch 함수로 API에 GET 요청, 응답을 response에 저장
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      // response를 JSON 형태로 파싱 > result에 저장
      const result = await response.json();

      // 스토어의 data 프로퍼티를 result로 설정
      // set 함수를 사용하여 상태를 업데이트
      // , 객체를 인자로 받아서 상태 업데이트
      set({ data: result })
    } catch (error) {
      // 데이터 가져올 때 에러 발생 시, 콘솔에 에러 출력
      console.error('Error fetching data: ', error);

      // 에러 발생 시, 스토어의 data 프로퍼티를 null로 설정
      // , 이전 데이터를 제거
      set({ data: null });
    }
  }
}))