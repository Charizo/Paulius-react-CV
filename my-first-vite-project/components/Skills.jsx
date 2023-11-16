import React from "react";
import "../src/App.css";

function ContactInfo() {
  return (
    <ul className="info-list">
      <li id="email">
        <a href="mailto: pauliusvolskis@gmail.com">
          pauliusvolskis@gmail.com
        </a>
      </li>
      <li id="phone">
        <a>+44 7477 302810</a>
      </li>
      <li id="linkedin">
        <a
          href="https://www.linkedin.com/in/paulius-volskis-08b65a17b/"
          rel="noreferrer"
        >
          https://www.linkedin.com/in/paulius-volskis-08b65a17b/
        </a>
      </li>
      <li id="github">
        <a href="https://github.com/Eros-code" target="_blank" rel="noreferrer">
          github.com/Eros-code
        </a>
      </li>
    </ul>
  );
}

function RelevantModules() {
  return (
    <section className="relevant-modules">
      <h1 className="section-heading">Relevant Modules</h1>
      <hr />
      <ul className="modules-list">
        <li>Statistical Physics (83.2%)</li>
        <li>Final Thesis (78.6%)</li>
        <li>Introduction to Scientific Computing (85.7%)</li>
      </ul>
      <br />
    </section>
  );
}

function SkillsList() {
  return (
    <section>
      <h1 className="section-heading">Skills</h1>
      <hr />
      <ul className="modules-list">
        <li>
          <strong>Programming Languages:</strong>
        </li>
        <li className="skills-bullet">HTML, CSS, JavaScript, Python, R</li>

        <li>
          <strong>Libraries & Frameworks:</strong>
        </li>
        <li className="skills-bullet">
          Flask, Django, Pandas, Dash, PySpark, Kafka Confluent, SQLite, Plotly,
          Matplotlib, Bootstrap, Boto3, BeautifulSoup, React
        </li>

        <li>
          <strong>Tools & Platforms:</strong>
        </li>
        <li className="skills-bullet">
          AWS EC2, AWS S3, AWS Lambda, AWS ECR, Docker, Git/github, Canva,
          PythonAnywhere, PostgreSQL, Netlify, CLI
        </li>
      </ul>
    </section>
  );
}

function RecentProjects() {
  return (
    <section>
      <h1 className="section-heading">Recent Projects</h1>
      <hr />
      <ul className="modules-list">
        <li>
          <strong>FMOD dynamic music system UI:</strong>
        </li>
        <li className="skills-bullet">
          A html page connected to an FMOD project that allows user interaction
          to determine the state of a piece of music by adjusting sliders
          corresponding to their respective parameters.
        </li>
        <li>
          <strong>Personal Website:</strong>
        </li>
        <li className="skills-bullet">
          A portfolio site designed and built by myself using Django and hosted
          on a PythonAnywhere server to showcase my skills and past work.
        </li>
        <li>
          <strong>Deloton:</strong>
        </li>
        <li>
          A live dashboard, a REST API and an automated report generator
          containing the last 24 hours worth of data presented in a pdf format
          was built to capture and compare KPIs from data streamed from exercise
          bikes.
        </li>
      </ul>
      <br />
    </section>
  );
}

function Interests() {
  return (
    <section>
      <h1 className="section-heading">Interests</h1>
      <hr />
      <ul className="modules-list">
        <li>Playing guitar</li>
        <li>Learning about physical & mental health</li>
        <li>Boxing</li>
        <li>Reading</li>
      </ul>
      <br />
    </section>
  );
}

export default function Skills() {
  return (
    <div className="skills-page-container">
      <ContactInfo />
      <RelevantModules />
      <SkillsList />
      <RecentProjects />
      <Interests />
    </div>
  );
}
