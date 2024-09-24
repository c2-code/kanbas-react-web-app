export default function Modules() {
    return (
      <div>
        <h5 id="wd-buttons">Buttons</h5>
        <>
          <button id="collapse-all" onClick={() => alert("Collapse All")} type="button">
            Collapse All
          </button>
          <button id="view-progress" onClick={() => alert("View Progress")} type="button">
            View Progress
          </button>
          <select id="wd-select-publish-type">
            <option selected value="Publish All">Publish All</option>
            <option value="Publish None">Publish None</option>
            <option value="Publish This">Publish This</option>
          </select>
          <button id="add-module" onClick={() => alert("Add Module")} type="button">
            + Module
          </button>
          <ul id="wd-modules">
            <li className="wd-module">
              <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda </div>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <span className="wd-title">LEARNING OBJECTIVES</span>
                  <ul className="wd-content">
                    <li className="wd-content-item">Introduction to the course</li>
                    <li className="wd-content-item">Learn what is Web Development</li>
                  </ul>
                </li>
              </ul>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <span className="wd-title">READING</span>
                  <ul className="wd-content">
                    <li className="wd-content-item"> Full Stack Developer - Chapter 1 - Introduction</li>
                    <li className="wd-content-item"> Full Stack Developer - Chapter 2 - Creating User</li>
                  </ul>
                </li>
              </ul>
              <ul className="wd-lessons">
                <li className="wd-lesson">
                  <span className="wd-title">SLIDES</span>
                  <ul className="wd-content">
                    <li className="wd-content-item"> Introduction to Web Development </li>
                    <li className="wd-content-item"> Creating an HTTP server with Node.js </li>
                    <li className="wd-content-item"> Creating a React Application </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="wd-module">
              <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            </li>
          </ul>
        </>
      </div>
  );}
  