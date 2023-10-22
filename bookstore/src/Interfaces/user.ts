// user(사용자) 인터페이스 정의

export interface UserType {
  // 사용자 아이디 (문자열)
  userId: string;
  // 사용자 비밀번호 (문자열)
  userPassword: string;
  // 사용자 이메일 (문자열)
  userEmail: string;
  // 사용자 주소 (문자열)
  userAddress: string;
  // 사용자 상세 주소 (문자열)
  userAddressDetail: string;
  // 사용자 이름 (문자열)
  userName: string;
  // 사용자 전화번호 (문자열)
  userPhone: string;
  
  // 가입 날짜 (문자열, 자동 설정)
  userSignUpDate: string;
  
  // 아이 생일 (문자열, 필수 X)
  userKidBirth?: string;
  // 탈퇴 날짜 (문자열, 필수 X)
  userWithDraw?: string;
}