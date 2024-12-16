import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/User";

export type UserState = {
  token: string;
  user: User;
};

const initialState: UserState = {
  token: "",
  user: { _id: "", googleId: "", email: "", name: "", picture: "" },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
