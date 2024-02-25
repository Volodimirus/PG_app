import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * The interface of the personal information slice
 */
export interface PersonalInfoState {
    firstName: string;
    secondName: string;
    jobTitle: string;
    photo: string;
    address: string;
    phone: string;
    email: string;
    about: string; // A short bio about the user.
}

/**
 * The initial state of the personal information slice.
 */
const initialState: PersonalInfoState = {
    firstName: "",
    secondName: "",
    jobTitle: "",
    photo: "",
    address: "",
    phone: "",
    email: "",
    about: "",
};

/**
 * Creates the personal information slice.
 */
export const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.firstName = action.payload;
        },
        setSecondName: (state, action: PayloadAction<string>) => {
            state.secondName = action.payload;
        },
        setJobTitle: (state, action: PayloadAction<string>) => {
            state.jobTitle = action.payload;
        },
        setPhoto: (state, action: PayloadAction<string>) => {
            state.photo = action.payload;
        },
        setAddress: (state, action: PayloadAction<string>) => {
            state.address = action.payload;
        },
        setPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setAbout: (state, action: PayloadAction<string>) => {
            state.about = action.payload;
        },
        /**
         * Resets the state of the personal information slice to its initial state.
         * @param state The current state.
         */
        resetPersonalInfo: (state) => {
            state.firstName = "";
            state.secondName = "";
            state.jobTitle = "";
            state.photo = "";
            state.address = "";
            state.phone = "";
            state.email = "";
            state.about = "";
        },
    },
});

/**
 * The actions available for modifying the personal information state.
 */
export const {
    setFirstName,
    setSecondName,
    setJobTitle,
    setPhoto,
    setAddress,
    setPhone,
    setEmail,
    setAbout,
    resetPersonalInfo,
} = personalInfoSlice.actions;

/**
 * The reducer for the personal information state.
 */
export default personalInfoSlice.reducer;
