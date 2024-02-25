import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Interface for the state of the experience slice.
 */
export interface EducationState {
    education: [EducationItemState?];
}

/**
 * Interface for the state of the education item.
 */
export interface EducationItemState {
    university: string;
    city: string;
    degree: string;
    subject: string;
    fromYear: number;
    toYear: number;
}

/**
 * The initial state of the experience slice.
 */
const initialState: EducationState = {
    education: [],
};

/**
 * Creates the experience slice.
 */
const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        /**
         * Adds an experience item to the state.
         * @param state The current state.
         * @param action The action payload containing the education item.
         */
        addEducation: (state, action: PayloadAction<EducationItemState>) => {
            state.education.push(action.payload);
        },
        /**
         * Deletes an experience item from the state.
         * @param state The current state.
         * @param action The action payload containing the index of the item to delete.
         */
        deleteEducation: (state, action: PayloadAction<number>) => {
            state.education.splice(action.payload, 1);
        },
        /**
         * Resets the experience slice to its initial state.
         * @param state The current state.
         */
        resetEducation: (state) => {
            state.education = initialState.education;
        },
    },
});

/**
 * The actions for the experience slice.
 */
export const { addEducation, deleteEducation, resetEducation } =
    educationSlice.actions;

/**
 * The reducer for the experience slice.
 */
export default educationSlice.reducer;
