import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  registeredUsers:
    JSON.parse(localStorage.getItem("registeredUsers")) || [],

  loggedInUsers:
    JSON.parse(localStorage.getItem("loggedInUsers")) || null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    registerUser: (state, action) => {
      state.registeredUsers.push(action.payload);

      localStorage.setItem(
        "registeredUsers",
        JSON.stringify(state.registeredUsers)
      );
    },

    loginUser: (state, action) => {
      state.loggedInUsers = action.payload;

      localStorage.setItem(
        "loggedInUsers",
        JSON.stringify(action.payload)
      );
    },

    logoutUser: (state) => {
      state.loggedInUsers = null;

      localStorage.removeItem("loggedInUsers");
    },
  },
});

export const {
  registerUser,
  loginUser,
  logoutUser,
} = authSlice.actions;

export default authSlice.reducer;