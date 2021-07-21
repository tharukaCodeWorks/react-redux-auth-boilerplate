const HOST = "https://api.myportfolio.social";
// const HOST = "http://localhost:8080"
export default HOST;
export const LOGIN = `${HOST}/token/generate-token`;
export const REGISTER = `${HOST}/signup`;
export const VERIFY_EMAIL = `${HOST}/guest/email/verify`;
export const FORGOT_PASSWORD = `${HOST}/guest/password/forgot`;
export const PASSWORD_RESET_CODE_VERIFY = `${HOST}/guest/password/verify-code`;
export const RESET_PASSWORD = `${HOST}/guest/password/reset`;
export const RESEND_VERIFY_EMAIL = `${HOST}/user/resend-verification-email?email=`;

export const CV_TEMPLATES = `${HOST}/template/published`;
export const TEMPLATE_PLACEHOLDER = `${HOST}/template/image/`;
export const DOWNLOAD_CV = `${HOST}/cv/generate?templateId=`;

export const MY_PERSONAL_DETAILS = `${HOST}/detail/personal/my`;
export const PERSONAL_DETAILS = `${HOST}/detail/personal`;
export const PRO_PIC = `${HOST}/user/pro-pic/`;
export const UPLOAD_PRO_PIC = `${HOST}/user/upload-pro-pic`;

export const WORK_EXPERIENCE = `${HOST}/detail/work-experience`;
export const MY_WORK_EXPERIENCE = `${HOST}/detail/work-experience/my`;

export const EDUCATION = `${HOST}/detail/education`;
export const MY_EDUCATION = `${HOST}/detail/education/my`;

export const SKILLS = `${HOST}/detail/skill`;
export const MY_SKILLS = `${HOST}/detail/skill/my`;

export const SOCIAL_MEDIA = `${HOST}/detail/social-media`;
export const MY_SOCIAL_MEDIA = `${HOST}/detail/social-media/my`;

export const HOBIE = `${HOST}/detail/hobie`;
export const MY_HOBIE = `${HOST}/detail/hobie/my`;

export const REFERENCE = `${HOST}/detail/reference`;
export const MY_REFERENCE = `${HOST}/detail/reference/my`;

export const EXTRA_ACTIVITY = `${HOST}/detail/extra-activity`;
export const MY_EXTRA_ACTIVITY = `${HOST}/detail/extra-activity/my`;