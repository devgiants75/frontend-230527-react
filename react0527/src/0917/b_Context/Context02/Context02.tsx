import React from 'react'
import Section from './Section'
import Heading from './Heading'

//! 중간 컴포넌트를 통과하는 컨텍스트

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
