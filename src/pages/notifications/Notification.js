import React from "react";
import { Link } from "react-router-dom";

function Notification({ notification_type, sender_username, sender_id, post_id, post_title, owner, owner_id }) {
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

  return (
    <div className="notification">
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
