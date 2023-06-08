import avatar from "/okphe.webp";

export default function Info() {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <img src={avatar} alt="avatar" className="home__img" />
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
  );
}
