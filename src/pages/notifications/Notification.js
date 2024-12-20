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
      style={{ fontWeight: is_read ? "normal" : "bold", cursor: "pointer" }} // Bold if unread
      onClick={handleClick}
    >
      <p>
        {postReference} {action} {postTitle && <Link to={`/posts/${post_id}`}>{postTitle}</Link>}.
      </p>
    </div>
  );
}

// Function to compile message based on notification type
function compileNotificationMessage(notification_type, sender_username, sender_id, post_id, post_title, owner, owner_id) {
  const postReference = sender_username ? (
    <Link to={`/profiles/${sender_id}`}>{sender_username}</Link>
  ) : (
    "A user"
  );

  let action = "";
  let postTitle = post_title ? `"${post_title}"` : "your post"; // If post_title exists, format it

  switch (notification_type) {
    case "like":
      action = `liked ${postTitle}`;
      break;
    case "comment":
      action = `commented on ${postTitle}`;
      break;
    case "follow":
      action = `started following you`;
      postTitle = ""; // No post title needed for follow
      break;
    case "new_post":
      action = `created a new post: ${postTitle}`;
      postTitle = ""; // We include the post title in action already, so reset it here
      break;
    default:
      action = "interacted with your post";
      postTitle = ""; // Default action, no post title displayed
      break;
  }

  return { action, postReference, postTitle };
}

export default Notification;
