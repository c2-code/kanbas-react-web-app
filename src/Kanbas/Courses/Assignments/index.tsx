export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
            </a> <br/>
            Multiple Modules | <strong>Not Available until</strong>  May6 at 12:00am | <br/>
            <strong>Due</strong> May 13  11:59PM | 100 PTS
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/1234">
            A2 - CSS + BOOTSTRAP
          </a> <br/>
            Multiple Modules | <strong>Not Available until</strong>  May13 at 12:00am | <br/>
            <strong>Due</strong> May 20  11:59PM | 100 PTS
          </li>
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
            href="#/Kanbas/Courses/1234/Assignments/12345">
            A3 - JAVASCRIPT + REACT
          </a> <br/>
            Multiple Modules | <strong>Not Available until</strong> May20 at 12:00am | <br/>
            <strong>Due</strong> May 27  11:59PM | 100 PTS
          </li>
        </ul>
      </div>
  );}
  