type Person = {
  id: number;
  name: string;
  profession: string;
  imageId: string;
}

type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
}

//! RenderingList02.tsx에서 사용하는 데이터 
export const people: Person[] = [
  {
    id: 0,
    name: 'Person1',
    profession: 'mathematician',
    imageId: 'MK3eW3A'
  },
  {
    id: 1,
    name: 'Person2',
    profession: 'chemist',
    imageId: 'MK3eW3A'
  },
  {
    id: 2,
    name: 'Person3',
    profession: 'physicist',
    imageId: 'MK3eW3A'
  },
  {
    id: 3,
    name: 'Person4',
    profession: 'chemist',
    imageId: 'MK3eW3A'
  },
  {
    id: 4,
    name: 'Person5',
    profession: 'astrophysicist',
    imageId: 'MK3eW3A'
  },
]

//! Practice.tsx에서 사용할 데이터 목록
type PostProps = {
  id: number;
  title: string;
  content: string;
}

export const postData: PostProps[] = [
  {
    id: 0,
    title: 'Post 1',
    content: 'Content 1'
  },
  {
    id: 1,
    title: 'Post 2',
    content: 'Content 2'
  },
  {
    id: 2,
    title: 'Post 3',
    content: 'Content 3'
  },
  {
    id: 3,
    title: 'Post 4',
    content: 'Content 4'
  },
  {
    id: 3,
    title: 'Post 5',
    content: 'Content 5'
  },
]

//! RenderingList03.tsx에서 사용할 데이터
export const recipes: Recipe[] = [
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta'],
  },
  {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'],
  },
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'],
  }
];