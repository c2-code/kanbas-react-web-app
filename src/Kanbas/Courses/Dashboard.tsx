/* eslint-disable jsx-a11y/alt-text */
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/pink.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
                 </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1111/Home">
            <img src="/images/grey.jpg" width={200} />
            <div>
              <h5>
                 CS1111 Fundies I
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science I
              </p>
              <button> Go </button>
            </div>
          </Link>
        <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1112/Home">
            <img src="/images/ochre.jpg" width={200} />
            <div>
              <h5>
                 CS1112 React JS
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Computer Science II
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4550/Home">
            <img src="/images/orange.jpg" width={200} />
            <div>
              <h5>
                 CS4550 Web Dev
                 </h5>
              <p className="wd-dashboard-course-title">
                Web Development
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/4530/Home">
            <img src="/images/pink.jpg" width={200} />
            <div>
              <h5>
                 CS4530 SWE
                 </h5>
              <p className="wd-dashboard-course-title">
                Fundamentals of Software Engineering
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1111/Home">
            <img src="/images/sage.jpg" width={200} />
            <div>
              <h5>
                 CS1111 AI
                 </h5>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/2222/Home">
            <img src="/images/taupe.jpg" width={200} />
            <div>
              <h5>
                 CS2222 HCI
                 </h5>
              <p className="wd-dashboard-course-title">
                Human Computer Interaction
              </p>
              <button> Go </button>
            </div>
          </Link>
          <div className="wd-dashboard-course"> ... </div>
        <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1112/Home">
            <img src="/images/yellow.jpg" width={200} />
            <div>
              <h5>
                 CS5555 ML
                 </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning
              </p>
              <button> Go </button>
            </div>
          </Link>
      </div>
    </div>
  );
}

