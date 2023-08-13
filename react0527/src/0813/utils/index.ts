// ts, tsx의 차이
// ts - 자바스크립트의 문법만을 담고 있는 파일
// tsx - 자바스크립트의 문법 파일에 html, css의 다른 내용을 같이 담을 수 있는 파일

interface Person {
  name: string;
  imageId: string;
}

export function getImageUrl(person: Person, size: string = 's'): string {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
