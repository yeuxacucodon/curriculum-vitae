import GoToTop from "./GoToTop";
// Left
import Home from "./Home";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";
import Languages from "./Languages";
// Right
import Interests from "./Interests";
import Skills from "./Skills";
import Projects from "./Projects";

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
            <Projects />
            <Skills />
            <Interests />
          </div>
        </div>
      </main>
      <GoToTop />
    </>
  );
}
