import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enrollCourse, unenrollCourse, loadEnrollments } from "./EnrollmentReducer";
import { Link } from "react-router-dom";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const storedEnrollments = JSON.parse(localStorage.getItem("enrollments") || "[]");
    if (storedEnrollments.length) {
      dispatch(loadEnrollments(storedEnrollments));
    }
  }, [dispatch]);

  useEffect(() => {
    const saveEnrollmentsToLocalStorage = () => {
      const stateEnrollments = enrollments.filter(
        (enrollment: { user: any; }) => enrollment.user === currentUser._id
      );
      localStorage.setItem("enrollments", JSON.stringify(stateEnrollments));
    };
    
    saveEnrollmentsToLocalStorage();
  }, [enrollments, currentUser._id]);

  
  const handleEnrollmentToggle = (courseId: string, isEnrolled: boolean) => {
    if (isEnrolled) {
      dispatch(unenrollCourse({ userId: currentUser._id, courseId }));
    } else {
      dispatch(enrollCourse({ userId: currentUser._id, courseId }));
    }
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      {/* If the user is a faculty, they can add, delete, edit, update the courses. */}
        {currentUser.role === "FACULTY" && (
        <>
          <h5 className="dashboard-title">
            DashBoard
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
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
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}
      {/* If the user is a student, they can enroll the courses. */}
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end mb-3"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "View Enrolled Courses" : "Enrollments"}
        </button>
      )}

      <h2 id="wd-dashboard-published">Published Courses</h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter((course) => {
              if (currentUser.role !== "STUDENT") return true;
              const isEnrolled = enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id && enrollment.course === course._id
              );
              return showAllCourses || isEnrolled;
            })
            .map((course: any) => {
              const isEnrolled = enrollments.some(
                (enrollment: any) =>
                  enrollment.user === currentUser._id && enrollment.course === course._id
              );

              return (
                <div
                  key={course._id}
                  className="wd-dashboard-course col"
                  style={{ width: "300px" }}
                >
                  <div className="card rounded-3 overflow-hidden">
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

                      {currentUser.role === "STUDENT" && (
                        <div className="d-flex justify-content-between align-items-center">
                          <button
                            className={`btn ${
                              isEnrolled ? "btn-danger" : "btn-success"} me-2`}
                            onClick={(event) => {
                              event.preventDefault();
                              handleEnrollmentToggle(course._id, isEnrolled);
                            }}
                          >
                            {isEnrolled ? "Unenroll" : "Enroll"}
                          </button>
                          {isEnrolled && (
                            <Link
                              to={`/Kanbas/Courses/${course._id}/Home`}
                              className="btn btn-primary"
                            >
                              Go
                            </Link>
                          )}
                        </div>
                      )}

                            {currentUser.role === "FACULTY" && (
                              <>
                                <Link
                                  to={`/Kanbas/Courses/${course._id}/Home`}
                                  className="btn btn-primary"
                                >
                                  Go
                                </Link>
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
                            )}

                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
