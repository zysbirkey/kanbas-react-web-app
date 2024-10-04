import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsCheckmark from "./AssignmentsCheckmark";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { PiNotePencilLight } from "react-icons/pi";
import { GoTriangleDown } from "react-icons/go";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br/><br /><br />
      <ul id="wd-assignments-title" className="list-group round-0 w-100">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="we-title p-3 ps-2 d-flex justify-content-between align-items-center" style={{ backgroundColor: '#f1f2f3'}}>
            <div>
              <BsGripVertical className="me-2 fs-3" /> <GoTriangleDown /> ASSIGNMENTS
            </div>
            <AssignmentsCheckmark/>
          </div>

          <ul id="wd-assignment-list" className="list-group rounded-0">
            {/* Assignment 1 */}
            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center position-relative" style={{ borderLeft: '5px solid green', paddingLeft: '10px' }}>
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilLight className="me-2 fs-3" />
                <div>
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'black', textDecoration: 'none' }}>A1</a>
                  <br />
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
                  <br />
                  <span><b>Due</b> May 13 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <AssignmentsControlButtons />
              </div>
            </li>

            {/* Assignment 2 */}
            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center position-relative" style={{ borderLeft: '5px solid green', paddingLeft: '10px' }}>
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilLight className="me-2 fs-3" />
                <div>
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'black', textDecoration: 'none' }}>A2</a>
                  <br />
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |
                  <br />
                  <span><b>Due</b> May 20 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <AssignmentsControlButtons />
              </div>
            </li>

            {/* Assignment 3 */}
            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center position-relative" style={{ borderLeft: '5px solid green', paddingLeft: '10px' }}>
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencilLight className="me-2 fs-3" />
                <div>
                  <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123" style={{ color: 'black', textDecoration: 'none' }}>A3</a>
                  <br />
                  <span style={{ color: 'red' }}>Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |
                  <br />
                  <span><b>Due</b> May 27 at 11:59pm | 100 pts</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <AssignmentsControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}