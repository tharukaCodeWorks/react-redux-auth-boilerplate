const HOST = "http://localhost:8080";

export default HOST;
export const LOGIN = `${HOST}/auth/sign-in`;
export const REGISTER = `${HOST}/auth/signup`;
export const VERIFY_EMAIL = `${HOST}/auth/email/verify`;
export const FORGOT_PASSWORD = `${HOST}/auth/password/forgot`;
export const PASSWORD_RESET_CODE_VERIFY = `${HOST}/auth/password/verify-code`;
export const RESET_PASSWORD = `${HOST}/auth/password/reset`;
export const RESEND_VERIFY_EMAIL = `${HOST}/user/resend-verification-email?email=`;
