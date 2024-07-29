import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  token: string;
  googleId: string;
  email: string;
  name: string;
  picture: string;
}

const initialState: UserState = {
  token: "",
  googleId: "",
  email: "",
  name: "",
  picture: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserState>) {
      state.token = action.payload.token;
      state.googleId = action.payload.googleId;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.picture = action.payload.picture;
    },
    logout(state) {
      state = initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
