const HOST = "https://avian-spring.herokuapp.com"
// const HOST = "http://localhost:8080"
export default HOST;
export const LOGIN = `${HOST}/token/generate-token`;
export const REGISTER = `${HOST}/signup`;
export const VERIFY_EMAIL = `${HOST}/guest/email/verify`;
export const FORGOT_PASSWORD = `${HOST}/guest/password/forgot`;
export const PASSWORD_RESET_CODE_VERIFY = `${HOST}/guest/password/verify-code`;
export const RESET_PASSWORD = `${HOST}/guest/password/reset`;
export const RESEND_VERIFY_EMAIL = `${HOST}/user/resend-verification-email?email=`;
