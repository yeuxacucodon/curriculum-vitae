import GoToTop from "./GoToTop";
// Left
import Home from "./Home";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
// Right
import Experience from "./Experience";
import Certificates from "./Certificates";
import Languages from "./Languages";
import Interests from "./Interests";

export default function Body() {
  return (
    <>
      <main className="l-main bd-container">
        <div className="resume">
          <div className="resume__left">
            <Home />
            <Social />
            <Profile />
            <Education />
            <Languages />
          </div>

          <div className="resume__right">
            <Skills />
            <Experience />
            <Certificates />
            <Interests />
          </div>
        </div>
      </main>
      <GoToTop />
    </>
  );
}
