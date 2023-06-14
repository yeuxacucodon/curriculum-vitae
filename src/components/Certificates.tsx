import styles from "@/assets/sass/certificates.module.scss";

export default function Certificates() {
  return (
    <section className="section" id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="bd-grid">
        <div>
          <h3 className={styles.certificate__title}>Office informatics (2023)</h3>
          <p>For Microsoft Word, Excel skills</p>
        </div>
      </div>
    </section>
  );
}
