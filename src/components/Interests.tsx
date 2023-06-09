export default function Interests() {
  return (
    <section className="interests section">
      <h2 className="section-title">Interests</h2>

      <div className="interests__container bd-grid">
        <div className="interests__content">
          <i className="bx bx-code-alt"></i>
          <span className="interests__name">Code</span>
        </div>
        <div className="interests__content">
          <i className="bx bxs-movie-play"></i>
          <span className="interests__name">Movie</span>
        </div>
        <div className="interests__content">
          <i className="bx bx-headphone"></i>
          <span className="interests__name">Music</span>
        </div>
      </div>
    </section>
  );
}
