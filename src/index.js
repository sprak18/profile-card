import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const SkillData = [
  { name: "HTML+CSS", level: "advanced", color: "blue" },
  { name: "Javascript", level: "intermediate", color: "yellow" },
  { name: "React", level: "beginner", color: "pink" },
  { name: "NodeJS", level: "beginner", color: "orange" },
  { name: "Git+Github", level: "intermediate", color: "red" },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="simpson.png" alt="simpson" className="avatar" />;
}

function Intro() {
  return (
    <div className="data">
      <h1>Homer Simpson</h1>
      <p>
        I'm Homer Simpson, a connoisseur of life's finer things like donuts and
        napping. Looking for a job where I can bring my unique blend of laziness
        and accidental genius to the table.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = SkillData;
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skillObject={skill} Key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skillObject }) {
  const colorclass = `skill ${skillObject.color}`;
  const emoji =
    skillObject.level === "beginner"
      ? String.fromCodePoint(0x1f476)
      : skillObject.level === "intermediate"
      ? String.fromCodePoint(0x1f44d)
      : String.fromCodePoint(0x1f4aa);
  return (
    <div className={colorclass}>
      <h5>{emoji + " " + skillObject.name}</h5>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
