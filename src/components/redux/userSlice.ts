import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  isAuthenticated: boolean;
  googleId: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  googleId: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.googleId = action.payload.googleId;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.googleId = "";
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
