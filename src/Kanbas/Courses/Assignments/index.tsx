import { useParams, useNavigate } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import { BsGripVertical } from "react-icons/bs";
import AssignControlButtons from "./AssignControlButtons";
import { PiNotePencil } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa6";
import LessonControlButtons from "./AssignmentsControlButtons";
import { deleteAssignment, setAssignments } from "./reducer";
import AssignmentEditor from "./AssignmentEditor";
import * as assignmentsClient from "./client";
import { useEffect } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector(
    (state: any) => state.assignmentReducer
  ).assignments.filter((assignment: any) => assignment.course === cid);
  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const dispatch = useDispatch();

  const fetchAssignments = async () => {
    const assignments = await assignmentsClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchAssignments();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="wd-assignments">
      <AssignmentsControls onAddAssignmentClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments/new`)} />
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li
          id="wd-assignments-title"
          className="wd-module list-group-item p-0 fs-5 d-flex justify-content-between align-items-center bg-light"
          style={{ padding: "20px", width: "100%", maxWidth: "1000px", margin: "auto" }}
        >
          <div className="d-flex">
            <BsGripVertical className="me-2 fs-3" />
            <div className="fw-bold" style={{ color: 'black', fontSize: '1em' }}>ASSIGNMENTS</div>
          </div>
          <div className="d-flex align-items-center">
            <AssignControlButtons />
          </div>
        </li>

        {assignments.map((assignment: any, index: any) => (
          <li
            key={assignment._id}
            id={`wd-assignment-${index + 1}`}
            style={{ borderLeft: "5px solid green", paddingLeft: "10px" }}
            className="list-group-item wd-assignment-list-item d-flex align-items-center"
          >
            <BsGripVertical className="me-1 fs-3 align-middle" />
            <PiNotePencil className="me-3 fs-3 align-middle text-success" />
            <div>
              <a
                id={`wd-assignment-link-${index + 1}`}
                className="wd-assignment-link fw-bold"
                href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                style={{ color: 'black', textDecoration: 'none', fontSize: '1.1em' }}
              >
                {assignment.title}
              </a>
              <br />
              <span id={`wd-assignment-${index + 1}-details`} style={{ fontSize: '1em' }}>
                <span style={{ color: 'red' }}>Multiple Modules</span> |{" "}
                <span>
                  <b>Not available until</b> {assignment.startDate}
                </span>{" "}
                | <br />
                <span>
                  <b>Due</b> {assignment.dueDate}
                </span>{" "}
                | <span>{assignment.points}</span>
              </span>
            </div>
            {currentUser.role === "FACULTY" && (
              <>
            <div className="ms-auto">
              <FaTrash
                className="text-danger me-2 mb-1"
                data-bs-toggle="modal"
                data-bs-target={`#deleteModal-${assignment._id}`} 
                style={{ fontSize: '1.1em' }}
              />
              <LessonControlButtons />
            </div>
            </>)}
            <AssignmentEditor
              assignmentId={assignment._id} 
              removeAssignment={() => removeAssignment(assignment._id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}