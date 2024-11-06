import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentReducer).assignments;
  const isEdit = assignments.findIndex((a: any) => a._id === aid) !== -1;

  const assignment = assignments.find((a: any) => a._id === aid) || {
    _id: aid,
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    course: cid,
    dueDate: "2024-09-18",
    availableFromDate: "2024-09-06",
    availableUntilDate: "2024-09-18",
  };

  const [editedAssignment, setEditedAssignment] = useState(assignment);

  const handleSave = async () => {
    if (isEdit) {
      await dispatch(updateAssignment(editedAssignment));
    } else {
      await dispatch(addAssignment(editedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="m-4">
        <label htmlFor="wd-name" 
               id="wd-assignment-name" 
               className="fw-bolder fs-5">
          Assignment Name
        </label>
        <div className="mb-3">
          <input
            id="wd-name"
            className="form-control"
            value={editedAssignment.title}
            onChange={(e) =>
              setEditedAssignment({ ...editedAssignment, title: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="mb-3 border m-4">
        <input
          id="wd-description"
          className="form-control"
          value={editedAssignment.description}
          style={{ height: "150px" }} 
          onChange={(e) =>
            setEditedAssignment({ ...editedAssignment, description: e.target.value,
            })
          }
        />
      </div>

      <div id="wd-assignments-editor-details">
        <div className="row align-items-center m-4 justify-content-front">
          <div className="col-auto">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-md-6">
            <input
              id="wd-points"
              className="form-control"
              value={editedAssignment.points}
              onChange={(e) =>
                setEditedAssignment({
                  ...editedAssignment,
                  points: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="row align-items-center m-4 justify-content-front">
          <div className="col-auto">
            <label htmlFor="wd-group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-md-6">
            <select id="wd-group" className="form-select">
              <option selected>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </select>
          </div>
        </div>

        <div className="row align-items-center m-4 justify-content-front">
          <div className="col-auto">
            <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as</label>
          </div>
          <div className="col-md-6">
            <select id="wd-display-grade-as" className="form-select">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row align-items-start m-4 justify-content-front">
          <div className="col-auto align-top">
            <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
          </div>
          <div className="col-md-6 border p-3">
            <select id="wd-submission-type" className="form-select">
              <option selected>Online</option>
            </select>
            <div className="m-3">
              
              <label><b>Online Entry Options</b></label>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                    <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-website-url" defaultChecked />
                                    <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                    <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                    <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                    <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />

        <div className="row align-items-start m-4 justify-content-front">
          <div className="col-auto align-top">
            <label htmlFor="wd-assign-details" className="form-label">Assign</label>
          </div>
          <div
            id="wd-assign-details"
            className="col-md-6"
            style={{
              border: "1px solid #ddd", 
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            <div className="col-md-6 m-2">
              <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
              <input id="wd-assign-to" className="form-control" defaultValue="Everyone" />
            </div>
            <div className="col-md-6 m-2">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input
                type="date"
                id="wd-due-date"
                className="form-control"
                value={editedAssignment.dueDate}
                onChange={(e) =>
                  setEditedAssignment({
                    ...editedAssignment,
                    dueDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control"
                  value={editedAssignment.availableFromDate}
                  onChange={(e) =>
                    setEditedAssignment({
                      ...editedAssignment,
                      availableFromDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control"
                  value={editedAssignment.availableUntilDate}
                  onChange={(e) =>
                    setEditedAssignment({
                      ...editedAssignment,
                      availableUntilDate: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 float-end">
          <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}