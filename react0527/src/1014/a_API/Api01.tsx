import React from 'react';

//! API 연동의 기본

// API 호출을 위해서는 axios 라이브러리 설치

// axios
// : 브라우저, node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리
// : 백엔드와 프론트엔드 사이의 통신을 담당

// axios 설치
// npm install axios (npm i axios)

//! REST API
// Representation State Trasfer의 약자
// : 서버와 클라이언트의 역할을 명확하게 분리하는 
// : 네트워크 아키텍처 원리의 집합

// ? REST 구성
// 1. 자원(Resource) - URI로 표현
// : 클라이언트는 URI을 사용하여 자원(데이터)을 지정하고 해당 자원의 상태(정보)에 대한 조작을 서버에 요청

// 2. 행위/메서드(Verb/Methods) - HTTP 메서드를 사용하여 표현
// : 클라이언트가 자원을 조작하기 위해 사용할 수 있는 방법
// : GET, POST, PUT DELETE 등

// 3. 표현(Representation) - 자원의 특정 시점에 대한 상태를 표현

// ? REST 6가지 원칙
// 1. Client-Server Architecture
// : 클라이언트와 서버가 독립적으로 분리

// 2. Stateless(무상태성)
// : 각 요청은 서버에 저장되지 X, 독립적으로 서버에 전달

// 3. Cacheabale(캐시 가능)
// : 클라이언트에서 캐싱이 가능해야 한다.

// 4. Uniform Interface
// : 일관된 인터페이스를 제공

// 5. Layered System(계층형 구조)
// : 다중 계층으로 구성 가능

// 6. Code-On-Demand
// : 클라이언트는 서버에서 코드를 가져와 기능을 확장

// ? HTTP 메서드 종류/역할 (CRUD)
// 1. GET
// : 서버에서 특정 리소스의 정보를 조회
// 2. POST
// : 서버에 새로운 리소스를 생성
// 3. PUT
// : 서버의 특정 리소스를 업데이트
// 4. DELETE
// : 서버의 특정 리소스를 삭제

// ? RESTful API 설계 원칙
// URI(Uniform Resource Identifier)는 정보의 자원을 표현!
// : 리소스명은 동사, 동작은 HTTP 메서드로 표현
// ex. 사용자 정보 조회: GET/users
// ex. 사용자 정보 삭제: GET/members/delete/1 (X)
//                      DELETE/members/1

// 자원에 대한 행위는 HTTP 메서드로 표현
// : URI에 동사를 사용하지 X
// ex. 사용자 생성: POST/users

// - 슬래시 구분자(/)는 계층 관계를 나타냄.
// http://restapi.example.com/houses/apartments

// - URI의 마지막 문자로 슬래시(/)를 포함하지 X
// http://restapi.example.com/houses/apartments/ (X)

// - 하이튼(-)을 사용하여 URI의 가독성을 높여야 한다.
// - 밑줄(_)은 사용 X

// URI 경로에는 소문자를 사용 권장

// 파일 확장자는 URI에 포함 X

// ? HTTP 응답 상태 코드
// 200: 클라이언트의 요청을 정상적으로 수행
// 201: 클라이언트의 리소스 생성 요청을 성공적으로 수행

// 400 Bad Request
// : 클라이언트의 요청이 부적절한 경우 사용하는 응답 코드 
// 401 Unauthorized
// : 클라이언트가 인증되지 않은 상태에서 보호된 리소스를 요청했을 때 사용하는 응답 코드
// 403 Forbidden 
// : 유저 인증상태와 관계 없이 응답하고 싶지 않은 리소스를 클라이언트가 요청했을 때 사용하는 응답 코드 
// 404 Not Found
// : 클라이언트가 요청한 리소스에서 사용 불가능한 Method를 사용할 경우

// 500
// : 서버에 문제가 있는 경우

//! axios의 사용법
// 1. 설치
// 2. axios import 

// axios.get('/users/1')
// : get이 위치한 자리에 메서드명을 소문자로 작성
// ex. 새로운 데이터를 등록: axios.post()

// axios.post('/users', {
//   username: 'hi',
//   name: 'hello' 
// });

// : axios.post()로 데이터를 등록 할 때에는 
//   두 번째 파라미터로 등록하고자 하는 정보를 넣을 수 있다.

export default function Api01() {
  return (
    <>
      <h2>REST API 정리</h2>
    </>
  )
}
