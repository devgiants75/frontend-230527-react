import { create } from 'zustand';
import { UserType } from '../Interfaces/user';

interface UserStore {
  user: UserType | null;
  setUser: (user: any) => void;
  removeUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: any) => {
    set((state) => ({...StaticRange, user}))
  },
  removeUser: () => {
    set((state) => ({...state, user: null}))
  }
}));

export default useUserStore;