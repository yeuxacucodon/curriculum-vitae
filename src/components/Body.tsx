// Left
import Info from "./Info";
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
    <main className="l-main bd-container">
      <div className="resume">
        <div className="resume__left">
          <Info />
          <Social />
          <Profile />
          <Education />
          <Skills />
        </div>

        <div className="resume__right">
          <Experience />
          <Certificates />
          <Languages />
          <Interests />
        </div>
      </div>
    </main>
  );
}
