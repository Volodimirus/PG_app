import { configureStore } from "@reduxjs/toolkit";
import personalInfoReducer from "./reducers/personalInfoSlice";
import experienceSlice from "./reducers/experienceSlice";

export const store = configureStore({
    reducer: {
        personalInfo: personalInfoReducer,
        experience: experienceSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
