export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__content bd-grid">
        <ul className="skills__data">
          <li className="skills__name">
            <span className="skills__circle"></span>HTML
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>CSS, Sass
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Shell / Bash
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>JavaScript, TypeScript
          </li>
        </ul>

        <ul className="skills__data">
          <li className="skills__name">
            <span className="skills__circle"></span>React
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>React Spring
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Redux
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Tailwind CSS
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Firebase
          </li>
          <li className="skills__name">
            <span className="skills__circle"></span>Git
          </li>
        </ul>
      </div>
    </section>
  );
}
