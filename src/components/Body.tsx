import Info from "./Info";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";

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
      </div>
    </main>
  );
}
