import GoToTop from "./GoToTop";
// Left
import Home from "./Home";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
// Right
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
            <Interests />
          </div>
        </div>
      </main>
      <GoToTop />
    </>
  );
}
