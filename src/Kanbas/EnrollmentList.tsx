import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

interface Course {
  _id: string;
  name: string;
  description: string;
}

export default function EnrolledList({ courses }: { courses: Course[] }) {
  const [error, setError] = useState<string>("");
  const [userCourses, setUserCourses] = useState<Course[]>([]); // Holds the courses the user is enrolled in

  // Extracting the current user data from the Redux store
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const role = currentUser.role;

  /**
   * Removes a course from the enrolled courses list
   * @param userId - ID of the current user
   * @param courseId - ID of the course to remove
   */
  const removeCourse = async (userId: string, courseId: string) => {
    try {
      // Filter out the course to be removed and update state
      const updatedUserCourses = userCourses.filter(
        (course) => course._id !== courseId
      );
      setUserCourses(updatedUserCourses);
    } catch (error) {
      console.error("Error removing course:", error);
      setError("Failed to remove course. Please try again.");
    }
  };

  /**
   * Loads the enrolled courses based on the current user's data
   * Runs whenever `currentUser.courses` changes
   */
  useEffect(() => {
    const enrolledCourses = courses.filter((course) =>
      currentUser.courses.includes(course._id)
    );
    setUserCourses(enrolledCourses);
  }, [courses, currentUser.courses]);

  return (
    <div id="wd-dashboard">
      <h2 id="wd-dashboard-published">
        Enrolled Courses ({userCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {userCourses.map((course) => (
            <div
              key={course._id}
              className="wd-dashboard-course col"
              style={{ width: "300px" }}
            >
              <div className="card rounded-3 overflow-hidden">
                {/* Course Link */}
                <Link
                  to={`/Kanbas/Courses/${course._id}/Home`}
                  className="text-decoration-none"
                >
                  <img src="/images/reactjs.jpg" alt={course.name} height="160" />
                  <div className="card-body">
                    <span
                      className="wd-dashboard-course-link"
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                    </span>
                    <p
                      className="wd-dashboard-course-title card-text"
                      style={{ maxHeight: 53, overflow: "hidden" }}
                    >
                      {course.description}
                    </p>
                  </div>
                </Link>

                {/* Course Actions */}
                <div className="card-body">
                  <button
                    id="wd-edit-course-click"
                    onClick={(event) => {
                      event.preventDefault(); // Prevent navigation
                      removeCourse(currentUser._id, course._id);
                    }}
                    className="btn btn-primary me-2"
                  >
                    Drop
                  </button>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-warning float-end"
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display any error message if present */}
      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}
