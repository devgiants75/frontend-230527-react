export type UserType = { 
  id: number, 
  name: string,
  age: number,
  phone: string,
  hobby: {
    sport: string,
    study: string,
  }
}