import styles from "@/assets/sass/profile.module.scss";

export default function Profile() {
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">Profile</h2>
      <p className={styles.profile__description}>
        I&apos;m always learning to improve my programming skills to develop professionally. I&apos;m always work
        responsibly and happy to take on any task. I have several years of experience working with JavaScript,
        TypeScript, HTML & CSS, React, React Spring, Next.js, Linux Terminal and Git.
      </p>
    </section>
  );
}
