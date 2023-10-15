// 연습용 API: JSONPlaceholder 제공
// : https://jsonplaceholder.typicode.com/users

// 연습용 API 타입 정의
export interface UserType {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': {
    'street': string,
    'suite': string,
    'city': string,
    'zipcode': string,
    'geo': {
      'lat': number,
      'lng': number
    }
  },
  'phone': string,
  'website': string,
  'company': {
    'name': string,
    'catchPhrase': string,
    'bs': string
  }
}