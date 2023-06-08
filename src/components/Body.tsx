import Info from "./Info";
import Social from "./Social";
import Profile from "./Profile";
import Education from "./Education";

export default function Body() {
  return (
    <main className="l-main bd-container">
      <div className="resume">
        <div className="resume__left">
          <Info />
          <Social />
          <Profile />
          <Education />
        </div>
      </div>
    </main>
  );
}
