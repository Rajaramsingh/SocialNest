import { createSlice } from '@reduxjs/toolkit'

const initialState = {
name: "",
userName: "",
email: "",
uid: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
        state.name = action.payload.name;
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.uid = action.payload.uid;

    },
    signOutUser: (state) => {
        state.name = "";
        state.userName = "";
        state.email = "";
        state.uid = "";
    },
  }
});

export const {signInUser,signOutUser} = userSlice.actions

export default userSlice.reducer