import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface PersonalInfoState {
    firstName: string;
    secondName: string;
    jobTitle: string;
    photo: string;
    address: string;
    phone: string;
    email: string;
    about: string;
}

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
    },
});

export const {
    setFirstName,
    setSecondName,
    setJobTitle,
    setPhoto,
    setAddress,
    setPhone,
    setEmail,
    setAbout,
} = personalInfoSlice.actions;

export default personalInfoSlice.reducer;
