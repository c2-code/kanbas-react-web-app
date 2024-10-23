import AssignmentControls from "./AssignmentControl";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments; 
  
  return (
    <div id="wd-assignments">
      <AssignmentControls /> 
      <br /> <br /> 
      <ul className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 bg-secondary d-flex align-items-center">
            <div className="col-auto">
              <BsGripVertical />
            </div>
            <div className="col">
              ASSIGNMENTS
            </div>
            <div className="col-auto">
              <ModuleControlButtons />
            </div>
          </div>

          {/* Assignment Items */}
          {assignments.map((item) => (
            <li key={item._id} className="wd-lesson list-group-item p-3 ps-1">
              <div className="row align-items-center">
                <div className="col-auto">
                  <BsGripVertical />
                  <MdOutlineAssignment />
                </div>
                <div className="col">
                  <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                    {item.title}
                  </a>
                  <br />
                  <span style={{ color: "red" }}>Multiple Modules</span>
                  <span>
                    {" "} | <b>Not available until</b> {item.availableDate} | 
                    <br />
                    <b>Due</b> {item.dueDate }| {item.points} points
                  </span>
                </div>
                <div className="col-auto">
                  <AssignmentControlButtons />
                </div>
              </div>
            </li>
          ))}
        </li>
      </ul>
    </div>
  );
}
