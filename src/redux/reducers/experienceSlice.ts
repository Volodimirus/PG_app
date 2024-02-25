import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * The interface for the state of the experience slice.
 */
export interface ExperienceState {
    experience: [ExperienceItemState?];
}

/**
 * The interface for the state of the experience item.
 */
export interface ExperienceItemState {
    position: string;
    company: string;
    city: string;
    fromYear: number;
    toYear: number;
}

/**
 * The initial state of the experience slice.
 */
const initialState: ExperienceState = {
    experience: [],
};

/**
 * Creates the experience slice.
 */
export const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        /**
         * Adds an experience item to the state.
         * @param state The current state.
         * @param action The action payload containing the new experience item.
         */
        setExperienceItem: (
            state,
            action: PayloadAction<ExperienceItemState>
        ) => {
            state.experience.push(action.payload);
        },

        /**
         * Deletes an experience item from the state.
         * @param state The current state.
         * @param action The action payload containing the index of the experience item to delete.
         */
        deleteExperienceItem: (state, action: PayloadAction<number>) => {
            state.experience.splice(action.payload, 1);
        },
        /**
         * Resets the state of the experience slice to its initial state.
         * @param state The current state.
         */
        resetExperience: (state) => {
            state.experience = initialState.experience;
        },
    },
});

/**
 * Actions for the experience slice.
 */
export const { setExperienceItem, deleteExperienceItem, resetExperience } =
    experienceSlice.actions;

/**
 * Reducer for the experience slice.
 */
export default experienceSlice.reducer;
