import { PlaceType } from './Type';

// 장소의 정보를 받아 해당 장소의 이미지 URL을 반환
export function getImageUrl(place: PlaceType) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}