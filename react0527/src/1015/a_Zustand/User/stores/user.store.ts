import { create } from "zustand";
import { UserType } from "../interfaces/user.type";
import { UserMockData } from "../mocks/User.mock";

type UserState = {
  users: UserType[];
  addUser: (name: string) => void;
  removeUser: (id: number) => void;
  // 사용자 정보 수정
  updateUser: (id: number, name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: UserMockData,
  addUser: (name) => set((state) => ({
    users: [
      ...state.users, 
      {
        id: state.users.length + 1, 
        name,
        age: 30,
        phone: '',
        hobby: {
          sport: '',
          study: ''
        },
      }]
  })),
  removeUser: (id) => set((state) => ({
    users: state.users.filter((user) => user.id !== id)
  })),
  updateUser: (id, name) => set((state) => ({
    users: state.users.map((user) => user.id === id ? { ...user, name }: user)
  })),
}));

