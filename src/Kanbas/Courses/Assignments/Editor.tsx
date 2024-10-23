import { useParams, useNavigate } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid } = useParams();
  const navigate = useNavigate(); 
  const assignment = db.assignments;


  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`); 
  };

  const handleSave = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <>
      {assignment.map((item) => (
        <div key={item._id} id="wd-assignments-editor" className="container">
          <h3><label htmlFor="wd-name">Assignment Name</label></h3>
          <div className="form-group mb-3">
            <input id="wd-name" value={item.title} className="form-control" readOnly />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" cols={40} rows={10} className="form-control" readOnly>
              {item.description}
            </textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-md-end d-flex align-items-center">
              <label htmlFor="wd-points" className="fw-bold">Points</label>
            </div>
            <div className="col-md-8">
              <input id="wd-points" value={item.points} className="form-control w-25" readOnly />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-md-end d-flex align-items-center">
              <label htmlFor="wd-group" className="fw-bold">Assignment Group</label>
            </div>
            <div className="col-md-8">
              <select id="wd-group" className="form-select w-50">
                <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-md-end d-flex align-items-center">
              <label htmlFor="wd-display-grade-as" className="fw-bold">Display Grade as</label>
            </div>
            <div className="col-md-8">
              <select id="wd-display-grade-as" className="form-select w-50">
                <option selected value="Percentage">Percentage</option>
                <option value="Letter">Letter</option>
                <option value="Number">Number</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-4 text-md-end d-flex align-items-start">
              <label className="fw-bold">Assign</label>
            </div>
            <div className="col-md-8">
              <div className="border p-3 rounded">
                <div className="mb-3">
                  <label htmlFor="wd-due-date" className="me-2">Due</label>
                  <div className="d-flex">
                    <input type="date" id="wd-due-date" value={item.dueDate} className="form-control w-50 me-2" />
                    <input type="time" id="wd-due-time" value="23:59" className="form-control w-25" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="wd-available-from">Available From</label>
                    <input type="date" id="wd-available-from" value={item.availableDate} className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="wd-available-until">Until</label>
                    <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
            <button className="btn btn-danger" onClick={handleSave}>Save</button>
          </div>
        </div>
      ))}
    </>
  );
}
