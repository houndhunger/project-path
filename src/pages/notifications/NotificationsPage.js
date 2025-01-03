import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Notification from "./Notification";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import notStyles from "../../styles/NotificationsPage.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";

import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function NotificationsPage({ message }) {
  const [notifications, setNotifications] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosReq.get("/notifications/");
        setNotifications(data);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };

    setHasLoaded(false);
    fetchNotifications();
  }, [pathname, currentUser]);

  // Function to mark all notifications as read
  const markAllAsRead = async () => {
    try {
      await axiosReq.post("/notifications/mark_all_read/");

      // Update state to mark all notifications as read
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.map((notification) => ({
          ...notification,
          is_read: true,
        })),
      }));
    } catch (err) {
      console.error("Error marking all notifications as read:", err);
    }
  };

  // Function to delete all read notifications
  const deleteAllReadNotifications = async () => {
    try {
      await axiosReq.delete("/notifications/delete_all_read/");

      // Filter out read notifications from the state
      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.filter(
          (notification) => !notification.is_read
        ),
      }));
    } catch (err) {
      console.error("Error deleting all read notifications:", err);
    }
  };

  const toggleReadStatus = async (id, isRead) => {
    try {
      const endpoint = isRead
        ? `/notifications/${id}/mark_unread/`
        : `/notifications/${id}/mark_read/`;
      await axiosReq.post(endpoint);

      setNotifications((prevNotifications) => ({
        ...prevNotifications,
        results: prevNotifications.results.map((notification) =>
          notification.id === id
            ? { ...notification, is_read: !isRead }
            : notification
        ),
      }));
    } catch (err) {
      console.error("Error toggling notification read status:", err);
    }
  };

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {hasLoaded ? (
          <>
            <div className={`${notStyles.Notification}`}>
              <h2>Notifications</h2>
              <div className={btnStyles.ButtonGroup}>
                <button
                  className={`${btnStyles.Button} ${btnStyles.ActionButton}`}
                  onClick={markAllAsRead}
                >
                  Mark All as Read
                </button>
                <button
                  className={`${btnStyles.Button} ${btnStyles.DeleteButton}`}
                  onClick={deleteAllReadNotifications}
                >
                  Delete All Read
                </button>
              </div>
              {notifications.results.length ? (
                <InfiniteScroll
                  dataLength={notifications.results.length}
                  loader={<Asset spinner />}
                  hasMore={!!notifications.next}
                  next={() => fetchMoreData(notifications, setNotifications)}
                >
                  {notifications.results
                    .sort((a, b) => b.id - a.id) // Sort notifications by id in descending order
                    .map((notification) => (
                      <Notification
                        key={notification.id}
                        {...notification}
                        setNotifications={setNotifications}
                        toggleReadStatus={() =>
                          toggleReadStatus(
                            notification.id,
                            notification.is_read
                          )
                        }
                      />
                    ))}
                </InfiniteScroll>
              ) : (
                <div className={notStyles.NoNotifications}>
                  <Asset
                    src={NoResults}
                    message={message || "No notifications"}
                  />
                </div>
              )}
            </div>
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default NotificationsPage;
