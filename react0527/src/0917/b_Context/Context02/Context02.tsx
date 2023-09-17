import React from 'react'
import Section from './Section'
import Heading from './Heading'

//! 중간 컴포넌트를 통과하는 컨텍스트

//? 컨텍스트 사용 전 주의사항
// 1. props 전달을 우선적으로 작성
//  props사용은 개발자에게 명확한 데이터 흐름을 보여주기 대문에
//  우선적으로 props를 통해 구조를 파악

// 2. 컴포넌트를 추출하고 JSX(TSX)를 그들의 자식으로 전달
// 중간 꼐층의 컴포넌트가 해당 데이터를 사용하지 않고 전달만 하는 경우
// EX. 데이터 props인 posts를 <Layout posts={posts} />와 같은 직접 사용하지 않는 시각적 컴포넌트에 전달
// >> 대신에 Layout을 children prop으로 받게 하고
// <Layout><Posts posts={posts}></Layout>로 렌더링

//? 컨텍스트 사용 예
// 1. 테마
// 2. 현재 계정
// 3. 라우팅
// 4. 상태 관리

// 게시글의 제목과 본문을 표시하는 컴포넌트
function Post({ title, body }: { title: string, body: string; }) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  )
}

// 모든 게시글을 보여주는 컴포넌트
function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  )
}

// 최근의 게시글들을 보여주는 컴포넌트
function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post 
        title='Flavors of Lisbon'
        body='...those paste is nice!'
      />
      <Post 
        title='Buenos Aires in the rhythm of tango'
        body='I loved it!'
      />
    </Section>
  );
}

export default function Context02() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post 
        title='Hello travller!'
        body='Read about my adventures'
      />
      <AllPosts />
    </Section>
  )
}
