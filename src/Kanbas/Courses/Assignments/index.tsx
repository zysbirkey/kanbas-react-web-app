import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsCheckmark from "./AssignmentsCheckmark";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { PiNotePencilLight } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";
import { useParams, Link } from "react-router-dom";
import { assignments } from "../../Database";// Import assignments from the JSON


export default function Assignments() {
  const { cid } = useParams(); // Get course ID from the URL
  // Filter assignments for the selected course
  const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

  return (
    <div id="wd-assignments">
      <AssignmentsControls />
      <br/><br /><br />
      <ul id="wd-assignments-title" className="list-group round-0 w-100">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div 
            className="we-title p-3 ps-2 d-flex justify-content-between align-items-center" 
            style={{ backgroundColor: '#f1f2f3'}}>
            <div>
              <BsGripVertical className="me-2 fs-3" /> <GoTriangleDown /> ASSIGNMENTS
            </div>
            <AssignmentsCheckmark/>
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
          {courseAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center position-relative"
                style={{ borderLeft: "5px solid green", paddingLeft: "10px" }}
              >
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <PiNotePencilLight className="me-2 fs-3" />
                  <div>
                    {/* Assignment link with encoded course ID and assignment ID */}
                    <Link
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {assignment.title}
                    </Link>
                    <br />

                    <span style={{ color: "red" }}>Multiple Modules</span> |{" "}
                    <b>Not available until</b> {assignment.startDate} |
                    <br />
                    <span>
                      <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                    </span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <AssignmentsControlButtons />
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
            