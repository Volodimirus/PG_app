import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./reducers/personalInfoSlice";
import experienceSlice from "./reducers/experienceSlice";
import educationSlice from "./reducers/educationSlice";

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        experience: experienceSlice,
        education: educationSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
