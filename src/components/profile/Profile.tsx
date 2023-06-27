import styles from "./profile.module.scss";
import React from "react";

const Profile: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">Profile</h2>
      <p className={styles.profile__description}>{children}</p>
    </section>
  );
};

export default Profile;
