import { UserType } from '../interfaces/user.type';

export const UserMockData: UserType[] = [
  {
    id: 1, 
    name: 'Lee Seung Ah',
    age: 50,
    phone: '010-1111-2222',
    hobby: {
      sport: 'baseball',
      study: 'react',
    }
  },
  {
    id: 2, 
    name: 'Lee Jun Gook',
    age: 40,
    phone: '010-1111-3333',
    hobby: {
      sport: 'baseball',
      study: 'medicine',
    }
  },
  {
    id: 3, 
    name: 'Lee Do Kyung',
    age: 50,
    phone: '010-1111-4444',
    hobby: {
      sport: 'basketball',
      study: 'math',
    }
  }
]