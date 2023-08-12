/* eslint-disable no-lone-blocks */

// 리액트를 사용하기 이전

// Fragment: 비어진 태그
{/* 
<>
  <h2 id="number">0</h2>
  <div>
    <button id="increase">+1</button>
    <button id="decrease">-1</button>
  </div>
</>;

const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase?.onclick = () => {
  const current = parseInt(number?.innerText, 10); 
  // 현재 숫자 가져오기
  // parseInt()함수: 문자열을 숫자로 변환하는데 사용, 10 - 10진수 의미
  number.innerText = current + 1;
}

decrease?.onclick = () => {
  const current = parseInt(number?.innerText, 10);
  number?.innerText = current - 1;
} 

*/}

// JavaScript의 Dom을 편리하게 사용하기 위해 다양한 프레임워크 만들어짐
//! 리액트 프레임워크: Dom의 속성을 편리하게 바뀌도록 연결X
//!                  모든 속성을 다 날리고, 처음부터 새로 만들어서 보여주도록 구동

// 리액트에서는 새로운 렌더링의 속도 저하를 방지하기 위해 Virtual Dom (가상 돔)을 사용
// Virtual Dom
// : Dom을 추상화한 가상의 객체

// Dom: 브라우저에서 다룰 HTML 문서를 파싱해서 '문서의 구성요소들을 객체로 구조화하여 나타낸 것'

// document.getElementById('hello').innerText = 'hello, world!'
// document.body.style.background = 'blue'

// 어떤 게시판의 리스트 10개 항목을 변경
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
</ul>

// JS의 Dom의 경우: 해당 li객체를 10번 변경하고 10번 렌더링
// React의 Virtual Dom의 경우: 가상의 돔에서 li태그를 10번 변경하고
// , Virtual Dom과 실제 Dom을 비교해서 변경된 부분인 ul태그를 통채로 1번 변경(렌더링)