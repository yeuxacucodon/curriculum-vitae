import styles from "@/assets/sass/profile.module.scss";

export default function Profile() {
  return (
    <section className="profile section" id="profile">
      <h2 className="section-title">Profile</h2>
      <p className={styles.profile__description}>
        I always actively learn new technologies by myself. I&apos;m responsible at work. I have less than 1 year of
        experience working with JavaScript, TypeScript, HTML & CSS, React, React Spring, Next.js, Linux Terminal and
        Git.
      </p>
    </section>
  );
}
