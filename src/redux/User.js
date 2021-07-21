import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { FORGOT_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD, VERIFY_EMAIL } from '../config/ApiConfig';

const initialUser = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): null;
const authToken = localStorage.getItem('authToken')? JSON.parse(localStorage.getItem('authToken')): null;
// const wait=ms=>new Promise(resolve => setTimeout(resolve, ms));

if(authToken != null){
  axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
}
// Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
    authToken: authToken,
    messages: {
      login: null,
      isProcessing: false,
      registration: null,
      verifyEmail: null,
      forgotPassword: null,
      resetPassword: null,
      status: null,
      registerStatus: null,
      emailVerifyStatus: null
    }
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.messages.login = action.payload.message;
      state.messages.status = action.payload.status;
      if(action.payload.status == "success"){
        axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.body[0].token}`;
        localStorage.setItem('user', JSON.stringify(action.payload.body[1]));
        localStorage.setItem('authToken', JSON.stringify(action.payload.body[0].token));
        state.user = action.payload.body[1];
        state.authToken = action.payload.body[0].token;
      }
      state.messages.isProcessing = false;
    },
    logoutSuccess: (state, action) =>  {
      state.user = null;
      state.authToken = null;
      localStorage.removeItem('user');
      localStorage.removeItem('authToken');
      state.messages.isProcessing = false;
    },
    registerSuccess: (state, action) =>{
      state.messages.registration = action.payload.message;
      state.messages.registerStatus = action.payload.status;
      state.messages.isProcessing = false;
    },
    verifySuccess: (state, action) => {
      state.messages.verifyEmail = action.payload.message;
      state.messages.emailVerifyStatus = action.payload.status;
      state.messages.isProcessing = false;
    },
    verifyForgotPassword: (state, action) => {
      state.messages.forgotPassword = action.payload.message;
      state.messages.status = action.payload.status;
      state.messages.isProcessing = false;
    },
    resetPasswordSuccess: (state, action) => {
      state.messages.resetPassword = action.payload.message;
      state.messages.status = action.payload.status;
      state.messages.isProcessing = false;
    },
    updateUserData: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.messages.isProcessing = false;
    },
    setIsprocessing:(state, action)=>{
      state.messages.isProcessing = true;
    }
  },
});

export default slice.reducer;

// Actions
const { loginSuccess, logoutSuccess, registerSuccess, verifySuccess, verifyForgotPassword, resetPasswordSuccess, updateUserData, setIsprocessing } = slice.actions;
export const login = ({ email, password }) => async dispatch => {
  try {
    dispatch(setIsprocessing())
    const res = await axios.post(LOGIN, { email: email, password: password });
    dispatch(loginSuccess(res.data));
  } catch (e) {
    return console.error(e.message);
  }
}

export const logout = () => async dispatch => {
  try {
    // const res = await api.post('/api/auth/logout/')
    dispatch(setIsprocessing())
    return dispatch(logoutSuccess())
  } catch (e) {
    return console.error(e.message);
  }
}

export const updateUserDataAction=(data)=> async dispatch =>{
  dispatch(setIsprocessing())
  return dispatch(updateUserData(data))
}

export const registerAction = ({firstName, lastName, email, password, gender}) => async dispatch =>{
  try{
    dispatch(setIsprocessing())
    const res = await axios.post(REGISTER, { firstName: email, passlastName: password, email: email, password: password, gender: gender });
    return dispatch(registerSuccess(res.data));
  }catch(e){
    return console.error(e.message);
  }
}

export const verifyEmail = ({email, verifyCode}) => async dispatch =>{
  try{
    dispatch(setIsprocessing())
    const res = await axios.post(VERIFY_EMAIL, { email: email, verifyCode: verifyCode });
    return dispatch(verifySuccess(res.data));
  }catch(e){
    return console.error(e.message);
  }
}

export const forgotPassword = ({email}) => async dispatch =>{
  try{
    dispatch(setIsprocessing())
    let formData = new FormData();
    formData.append("email", email);
    const res = await axios.post(FORGOT_PASSWORD, formData);
    return dispatch(verifyForgotPassword(res.data));
  }catch(e){
    return console.error(e.message);
  }
}

export const resetPassword = ({email, resetCode, password}) => async dispatch =>{
  try{
    dispatch(setIsprocessing())
    let formData = new FormData();
    formData.append("email", email);
    formData.append("resetCode", resetCode);
    formData.append("newPassword", password);
    const res = await axios.post(RESET_PASSWORD, formData);
    return dispatch(resetPasswordSuccess(res.data));
  }catch(e){
    return console.error(e.message);
  }
}