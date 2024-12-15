// src/pages/notifications/Notification.js
import React from 'react';

// A simple functional component to render a notification
function Notification({ message }) {
  return (
    <div className="notification">
      {message}
    </div>
  );
}

export default Notification;
