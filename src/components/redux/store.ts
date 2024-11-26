import { configureStore } from "@reduxjs/toolkit";

import { Store } from "redux";

import userReducer from "./userSlice";

const store: Store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
