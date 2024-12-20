import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Notification from "./Notification";  

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Function to mark a notification as read
  const markAsRead = async (id) => {
    try {
      // Make PUT request to mark notification as read
      await axiosReq.put(`/notifications/${id}/read/`);
      
      // Update state to reflect the change
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) =>
          notification.id === id ? { ...notification, is_read: true } : notification
        )
      );
    } catch (err) {
      console.error("Error marking notification as read:", err);
    }
  };

  // Function to delete all notifications
  const deleteAllNotifications = async () => {
    try {
      await axiosReq.delete("/notifications/");  // Send DELETE request to remove all notifications

      // Clear notifications state after deletion
      setNotifications([]);
    } catch (err) {
      console.error("Error deleting all notifications:", err);
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get('/notifications/');
        //  console.log(data);  // Log the whole data object for inspection
        
        if (Array.isArray(data.results)) {
          setNotifications(data.results);
        } else {
          console.error("Notifications is not an array:", data);
        }
        setHasLoaded(true);
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setHasLoaded(true);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div>
      <h1>Notifications</h1>
      <button onClick={deleteAllNotifications}>Delete All Notifications</button>
      {hasLoaded ? (
         notifications.length > 0 ? (
          notifications.map((notification) => (
            <Notification 
              key={notification.id}
              {...notification}
              markAsRead={markAsRead}  // Pass the function down to Notification component
            />
          ))
        ) : (
          <p>No notifications available.</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default NotificationsPage;
