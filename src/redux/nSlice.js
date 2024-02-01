// notificationSlice.js
// Update the import path
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
  type: null, // success or error
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
    },
    clearNotification: (state) => {
      state.message = null;
      state.type = null;
    },
  },
});

export const { setNotification, clearNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
