// Notification.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "./nSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const { message, type } = useSelector((state) => state.notification);

  const handleClose = () => {
    dispatch(clearNotification());
  };

  return (
    <div className={`notification ${type}`}>
      <p>{message}</p>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Notification;
