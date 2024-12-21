import React from "react";
import { Link } from "react-router-dom";

function Notification({
  id, 
  is_read,  // Add is_read to props
  notification_type,
  sender_username,
  sender_id,
  post_id,
  post_title,
  owner,
  owner_id,
  markAsRead  // Function passed down from parent
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
    if (!is_read) {
      markAsRead(id);  // Mark the notification as read
    }
  };

  return (
    <div
      className="notification"
      style={{ cursor: "pointer" }} // Ensure cursor shows pointer on hover
      onClick={handleClick}
    >
      <p>
        {/* Conditionally bold user and post title */}
        <span style={{ fontWeight: is_read ? "normal" : "bold" }}>
          {postReference}{" "}
        </span>

        {/* Action text goes here */}
        <span>{action}{notification_type !== 'follow' && ": "}</span>

        {/* Post title displayed only if there is a post */}
        {post_id && (
          <span style={{ fontWeight: is_read ? "normal" : "bold" }}>
            <Link to={`/posts/${post_id}`}>{postTitle}</Link>
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
  post_title,
  owner,
  owner_id
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
