import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import Notification from "./Notification";  // Assuming you have a Notification component

function NotificationsPage() {
  const [notifications, setNotifications] = useState([]);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get('/notifications/');
        console.log(data);  // Log the whole data object for inspection
        
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
      {hasLoaded ? (
        Array.isArray(notifications) && notifications.length ? (
          notifications.map((notification) => (
            <Notification key={notification.id} {...notification} />
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
