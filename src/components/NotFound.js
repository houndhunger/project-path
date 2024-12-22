import React from "react";
import NoResults from "../assets/not-found.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={NoResults}
        message={
          <p className="text-center">
            Architecture may strive to be timeless, yet even it cannot escape the relentless flow of time.
            <br />
            <br />
            Unfortunately, the page you&apos;re looking for seems to have been swept away.
          </p>
        }
      />
    </div>
  );
};

export default NotFound;
