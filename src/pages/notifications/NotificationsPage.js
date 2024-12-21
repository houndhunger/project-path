import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Notification from "./Notification";  
import btnStyles from "../../styles/Button.module.css";
import Button from "react-bootstrap/Button";

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Function to mark a notification as read
  const markAsRead = async (id) => {
    try {
      // Make PUT request to mark notification as read
      await axiosReq.post(`/notifications/${id}/mark-read/`);
      console(`/notifications/${id}/mark-read/`);
      
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

  // Function to mark all notifications as read
  const markAllAsRead = async () => {
    try {
      await axiosReq.post("/notifications/mark_all_read/");  // Send POST request to mark all as read

      // Update state to mark all notifications as read
      setNotifications((prevNotifications) =>
        prevNotifications.map((notification) => ({
          ...notification,
          is_read: true,
        }))
      );
    } catch (err) {
      console.error("Error marking all notifications as read:", err);
    }
  };

  // Function to delete all read notifications
  const deleteAllRedNotifications = async () => {
    try {
      // Send DELETE request to remove only read notifications
      await axiosReq.delete("/notifications/delete_all_read/");  // Ensure this endpoint is correct on the backend

      // Filter out read notifications from the state
      setNotifications(prevNotifications =>
        prevNotifications.filter(notification => !notification.is_read)
      );
    } catch (err) {
      console.error("Error deleting all read notifications:", err);
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get('/notifications/');
        // console.log(data);  // Log the whole data object for inspection
        
        if (Array.isArray(data.results)) {
          // Sort notifications by post_id (ascending)
          const sortedNotifications = data.results.sort((a, b) => a.post_id - b.post_id);
          setNotifications(sortedNotifications);
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
      <Button 
        className={`${btnStyles.Button} ${btnStyles.Action}`}
        onClick={markAllAsRead}>Mark All as Read
      </Button>
      <Button 
        className={`${btnStyles.Button} ${btnStyles.Action}`}
        onClick={deleteAllRedNotifications}>Delete all red Notifications
      </Button>
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
