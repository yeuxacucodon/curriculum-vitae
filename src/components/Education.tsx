export default function Education() {
  return (
    <section className="education section" id="education">
      <h2 className="section-title">Education</h2>

      <div className="education__container bd-grid">
        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div className="education__data bd-grid">
            <h3 className="education__title">JavaScript & TypeScript</h3>
            <span className="education__studies">F8, W3Schools, freeCodeCamp</span>
            <span className="education__year">October, 2021 - April, 2022</span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div className="education__data bd-grid">
            <h3 className="education__title">HTML & CSS</h3>
            <span className="education__studies">F8, W3Schools</span>
            <span className="education__year">April, 2022 - September, 2022</span>
          </div>
        </div>

        <div className="education__content">
          <div className="education__time">
            <span className="education__rounder"></span>
            <span className="education__line"></span>
          </div>
          <div className="education__data bd-grid">
            <h3 className="education__title">React, React Spring, React Router, Redux</h3>
            <span className="education__studies">F8, W3Schools, freeCodeCamp, YouTube</span>
            <span className="education__year">October, 2022 - April, 2023</span>
          </div>
        </div>
      </div>
    </section>
  );
}
