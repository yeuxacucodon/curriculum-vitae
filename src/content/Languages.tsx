import { Language } from "@/components";
import { language } from "@/types";

const langs: language[] = [
  {
    lang: "English",
    percent: "75%",
  },
  {
    lang: "Vietnamese",
    percent: "90%",
  },
];

const Languages: React.FC = () => {
  return (
    <section className="section" id="languages">
      <h2 className="section-title">Languages</h2>

      <div>
        <ul>
          {langs.map((value, index) => (
            <Language key={index} lang={value.lang} percent={value.percent} />
          ))}
        </ul>
      </div>
    </section
  );
};

export default Languages;
