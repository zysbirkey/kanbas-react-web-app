import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as db from "../../Database";

// Define types for assignments if not already defined
interface Assignment {
  _id: string;
  title: string;
  description?: string;
  points?: number;
  startDate?: string;
  dueDate?: string;
}

// Define the initial state
const initialState = {
  assignments: db.assignments as Assignment[],
};

// Create the assignments slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Add Assignment
    addAssignment: (state, action: PayloadAction<Assignment>) => {
      state.assignments.push(action.payload); // Directly mutate the state
    },

    // Delete Assignment
    deleteAssignment: (state, action: PayloadAction<string>) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    // Update Assignment
    updateAssignment: (state, action: PayloadAction<Assignment>) => {
      const index = state.assignments.findIndex(
        (assignment) => assignment._id === action.payload._id
      );
      if (index !== -1) {
        state.assignments[index] = action.payload; // Directly update the specific assignment
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
