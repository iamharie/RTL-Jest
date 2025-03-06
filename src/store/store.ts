import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slice";
import jobListSlice from "./jobListSlice";

export const store = configureStore({
  reducer: {
    jobList: jobListSlice,
    jobs: jobsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
