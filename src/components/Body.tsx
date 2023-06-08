import Info from "./Info";
import Social from "./Social";

export default function Body() {
  return (
    <main className="l-main bd-container">
      <div className="resume">
        <div className="resume__left">
          <Info />
          <Social />
        </div>
      </div>
    </main>
  );
}
