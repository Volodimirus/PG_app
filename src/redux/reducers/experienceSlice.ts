import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExperienceState {
    experienceItem: {
        position: string;
        company: string;
        city: string;
        fromYear: number;
        toYear: number;
    };
}

const initialState: ExperienceState = {
    experienceItem: {
        position: "",
        company: "",
        city: "",
        fromYear: 0,
        toYear: 0,
    },
};

export const experienceSlice = createSlice({
    name: "experience",
    initialState,
    reducers: {
        setPosition: (
            state: ExperienceState,
            action: PayloadAction<string>
        ) => {
            state.experienceItem.position = action.payload;
        },
        setCompany: (state: ExperienceState, action: PayloadAction<string>) => {
            state.experienceItem.company = action.payload;
        },
        setCity: (state: ExperienceState, action: PayloadAction<string>) => {
            state.experienceItem.city = action.payload;
        },
        setFromYear: (
            state: ExperienceState,
            action: PayloadAction<number>
        ) => {
            state.experienceItem.fromYear = action.payload;
        },
        setToYear: (state: ExperienceState, action: PayloadAction<number>) => {
            state.experienceItem.toYear = action.payload;
        },
    },
});

export const { setPosition, setCompany, setCity, setFromYear, setToYear } =
    experienceSlice.actions;

export default experienceSlice.reducer;
