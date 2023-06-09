// Left
import Info from "./Info";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
// Right
import Experience from "./Experience";

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
        </div>
      </div>
    </main>
  );
}
