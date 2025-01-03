import React from "react";
import { Link } from "react-router-dom";
import appStyles from "../../App.module.css";

function Notification({
  id,
  is_read,
  notification_type,
  sender_username,
  sender_id,
  post_id,
  post_title,
  owner,
  owner_id,
  toggleReadStatus,
}) {
  // Compile the notification message based on the notification type
  const { action, postReference, postTitle } = compileNotificationMessage(
    notification_type,
    sender_username,
    sender_id,
    post_id,
    post_title,
    owner,
    owner_id
  );

  // Handle notification click to mark it as read
  const handleClick = () => {
    toggleReadStatus(id, is_read); // Mark the notification as read
  };

  return (
    <div
      className="notification"
      style={{ cursor: "pointer" }} // Ensure cursor shows pointer on hover
      onClick={handleClick}
    >
      <p>
        <span style={{ fontWeight: is_read ? "normal" : "bold" }}>
          {postReference}
          {" "}
        </span>
        <span>
          {action}
          {notification_type !== "follow" && ": "}
        </span>
        {post_id && (
          <span
          className={is_read ? "" : appStyles.bold}
          style={{ fontWeight: is_read ? "normal" : "bold" }}
        >
          <Link to={`/posts/${post_id}`} className={appStyles.a}>
            {postTitle}
          </Link>
        </span>
        )}
      </p>
    </div>
  );
}

// Function to compile message based on notification type
function compileNotificationMessage(
  notification_type,
  sender_username,
  sender_id,
  post_id,
  post_title
) {
  const postReference = sender_username ? (
    <Link to={`/profiles/${sender_id}`}>{sender_username}</Link>
  ) : (
    "A user"
  );

  let action = "";
  let postTitle = post_title ? post_title : ""; // Only the raw title, no quotes

  switch (notification_type) {
    case "like":
      action = `liked your post`;
      break;
    case "comment":
      action = `commented on your post`;
      break;
    case "follow":
      action = `started following you`;
      break;
    case "new_post":
      action = `created a new post`;
      break;
    default:
      action = "interacted with your post";
      break;
  }

  return { action, postReference, postTitle };
}

export default Notification;
