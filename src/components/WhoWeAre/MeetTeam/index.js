import React from "react";
import styles from "./Team.module.css";

const MeetTeam = () => {
  return (
    <div className={styles.team}>
      <div className={styles.teamPicture}>
        <img src="assets/images/team.webp" alt="team" />
      </div>
    </div>
  );
};

export default MeetTeam;
