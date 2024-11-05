import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as db from "./Database";

export default function Dashboard(
  { courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
  { courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;}) 
    {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const dispatch = useDispatch();
  
  // Local state to manage enrollment visibility
  const [showAllCourses, setShowAllCourses] = useState(false);

  const handleEnrollmentToggle = (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) {
      // Dispatch action to unenroll
      dispatch({ type: "ENROLL_COURSE", payload: courseId });
    } else {
      // Dispatch action to enroll
      dispatch({ type: "UNENROLL_COURSE", payload: courseId });
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              onClick={addNewCourse}
              id="wd-add-new-course-click"
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
        </>
      )}

      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </button>
      )}

      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) =>
              showAllCourses ||
              db.enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              )
            )
            .map((course) => {
              const isEnrolled = db.enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser._id &&
                  enrollment.course === course._id
              );

              return (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link
                      to={isEnrolled ? `/Kanbas/Courses/${course._id}/Home` : "#"}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                    >
                      <img src="/images/reactjs.jpg" width="100%" height={160} alt="" />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>

                        {currentUser.role === "FACULTY" ? (
                          <>
                            <button className="btn btn-primary">Go</button>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        ) : (
                          <>
                            {isEnrolled ? (
                              <button
                                className="btn btn-danger"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleEnrollmentToggle(course._id, true);
                                }}
                              >
                                Unenroll
                              </button>
                            ) : (
                              <button
                                className="btn btn-success"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleEnrollmentToggle(course._id, false);
                                }}
                              >
                                Enroll
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}