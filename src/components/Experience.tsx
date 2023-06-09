export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience__container bd-grid">
        <div className="experience__content">
          <div className="experience__time">
            <span className="experience__rounder"></span>
            <span className="experience__line"></span>
          </div>

          <div className="experience__data bd-grid">
            <h3 className="experience__title">Front-End Developer</h3>
            <span className="experience__company">From 2021 | GitHub</span>
            <p className="experience__descripttion">Where I save my open source projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
