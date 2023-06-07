const Body: React.FC = () => {
  return (
    <main className="l-main bd-container">
      <div className="resume">
        <div className="resume__left">
          {/* Home */}
          <section className="home" id="home">
            <div className="home__container section bd-grid">
              <div className="home__data bd-grid">
                <img src="/okphe.webp" alt="avatar" className="home__img" />
                <h1 className="home__title">Vo Quang Chien</h1>
                <h3 className="home__profession">Front-End Developer</h3>
              </div>
              <div className="home__address bd-grid">
                <span className="home__infomation">
                  <i className="bx bxs-map"></i>Hue, Viet Nam
                </span>
                <span className="home__infomation">
                  <i className="bx bxs-envelope"></i>yeuxacucodon.dev@proton.me
                </span>
                <span className="home__infomation">
                  <i className="bx bxs-phone"></i>0852008975
                </span>
              </div>
            </div>
          </section>
          {/* Social */}
          <section className="social section">
            <h2 className="section-title">SOCIAL</h2>
            <div className="social__container bd-grid">
              <a href="https://github.com/yeuxacucodon" className="social__link">
                <i className="bx bxl-github"></i>yeuxacucodon
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Body;
