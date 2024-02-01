// store.js
import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "./nSlice";

const store = configureStore({
  reducer: {
    notification: notificationReducer,
    // ... other reducers
  },
});

export default store;
