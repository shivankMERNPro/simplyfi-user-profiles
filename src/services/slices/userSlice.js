import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //---------------------------------
    // Set initial user data from API
    //---------------------------------
    setUserData: (state, action) => {
      const { data } = action.payload;
      state.userData = data;
    },

    //---------------------------------
    // Update a user by id
    //---------------------------------
    updateUserData: (state, action) => {
      const { id, newData } = action.payload;
      state.userData = state.userData.map((user) =>
        user.id === id ? { ...user, ...newData } : user,
      );
    },

    //---------------------------------
    // Delete a user by id
    //---------------------------------
    deleteUserData: (state, action) => {
      const id = action.payload;
      state.userData = state.userData.filter((user) => user.id !== id);
    },
  },
});

export const { setUserData, updateUserData, deleteUserData } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
