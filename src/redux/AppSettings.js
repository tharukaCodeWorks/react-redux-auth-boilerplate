import { createSlice } from '@reduxjs/toolkit';

// Slice
const slice = createSlice({
  name: 'appSettings',
  initialState: {
    alertBoxShow: false
  },
  reducers: {
    showAlertBox: (state, action) => {
      state.alertBoxShow = true;
    },
    hideAlertBox: (state, action) => {
        state.alertBoxShow = false;
    }
  },
});

export default slice.reducer;

// Actions
const { showAlertBox, hideAlertBox } = slice.actions;
export const showAlertAction = () => dispatch => {
    dispatch(showAlertBox());
}

export const hideAlertAction = () => dispatch => {
    dispatch(hideAlertBox());
}
