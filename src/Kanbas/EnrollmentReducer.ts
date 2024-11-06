import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of an enrollment entry
interface Enrollment {
  user: string;
  course: string;
}

// Define the structure of the state for enrollments
interface EnrollmentState {
  enrollments: Enrollment[];
}

// Initial state with an empty array of enrollments
const initialState: EnrollmentState = {
  enrollments: [],
};

// Create a slice for managing enrollment-related actions and reducers
const enrollmentSlice = createSlice({
  name: 'enrollments',
  initialState,
  reducers: {
    /**
     * Action to enroll a user in a course
     * - Adds a new enrollment entry to the enrollments array
     */
    enrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
      ) => {
      const { userId, courseId } = action.payload;
      state.enrollments.push({ user: userId, course: courseId });
    },

    /**
     * Action to unenroll a user from a course
     * - Filters out the specific enrollment entry from the enrollments array
     */

    unenrollCourse: (
      state,
      action: PayloadAction<{ userId: string; courseId: string }>
    ) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) => !(enrollment.user === userId && enrollment.course === courseId)
      );
    },


    /**
     * Action to load a predefined list of enrollments
     * - Replaces the enrollments array with the provided list
     */
    loadEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
      },
    },
});

// Export actions for dispatching
export const { enrollCourse, unenrollCourse, loadEnrollments } = enrollmentSlice.actions;
// Export the reducer to be added to the store
export default enrollmentSlice.reducer;