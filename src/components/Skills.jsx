function Skills() {
  return (
    <section className="skills-section" id="skills-section">
      <h1 className="sub-title">
        My <span>Skills</span>
      </h1>

      <div className="skills-wrapper">
        {/* Technical Skills */}
        <div className="skills-container">
          <h1 className="heading1">Technical Skills</h1>
          <div className="Technical-bars">
            <div className="bar">
              <i className="bx bxl-html5" style={{ color: "#e44d26" }}></i>
              <div className="info"><span>HTML</span></div>
              <div className="progress-line html"><span data-percent="90%"></span></div>
            </div>
            <div className="bar">
              <i className="bx bxl-css3" style={{ color: "#264de4" }}></i>
              <div className="info"><span>CSS</span></div>
              <div className="progress-line css"><span data-percent="75%"></span></div>
            </div>
            <div className="bar">
              <i className="bx bxl-javascript" style={{ color: "#f0db4f" }}></i>
              <div className="info"><span>JavaScript</span></div>
              <div className="progress-line javascript"><span data-percent="70%"></span></div>
            </div>
            <div className="bar">
              <i className="bx bxl-react" style={{ color: "#3776ab" }}></i>
              <div className="info"><span>React</span></div>
              <div className="progress-line react"><span data-percent="65%"></span></div>
            </div>
            <div className="bar">
              <i className="bx bxl-java" style={{ color: "#61dbfb" }}></i>
              <div className="info"><span>Java</span></div>
              <div className="progress-line java"><span data-percent="80%"></span></div>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="container1">
          <h1 className="heading1">Professional Skills</h1>
          <div className="radial-bars">
            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path percent-85" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">85%</div>
              <div className="text">Creativity</div>
            </div>

            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path percent-80" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">80%</div>
              <div className="text">Communication</div>
            </div>

            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path percent-75" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">75%</div>
              <div className="text">Problem Solving</div>
            </div>

            <div className="radial-bar">
              <svg viewBox="0 0 200 200">
                <circle className="progress-bar" cx="100" cy="100" r="80"></circle>
                <circle className="path percent-95" cx="100" cy="100" r="80"></circle>
              </svg>
              <div className="percentage">95%</div>
              <div className="text">Teamwork</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
