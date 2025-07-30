export { default } from 'next-auth/middleware'

export const config = {
  // 로그인한 사용자만 볼 수 있는 페이지
  matcher: ['/users/info', '/users/mypage'],
}
