import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    username: "",
    email: "",
  },
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { changeUsername, changeEmail } = formSlice.actions;
export default formSlice.reducer;
