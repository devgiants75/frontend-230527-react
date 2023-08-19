import React from 'react'
// posts데이터 import
import { postData } from './data'

type PostProps = {
  id: number;
  title: string;
  content: string;
}

//! Post 컴포넌트 생성
// div 태그 안에 h2, p태그를 사용해 포스트의 제목과 내용을 반환
const Post = ({ title, content }: PostProps) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

// Post 컴포넌트를 사용하는 Practice 함수
export default function Practice() {
  return (
    // 해당 데이터를 모두 나열: map()
    // Post 컴포넌트를 사용 
    // - 스프레드를 사용하여 배열을 모두 나열
    <div>
      {postData.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  )
}
