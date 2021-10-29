import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.locations.push(action.payload);
    },
  },
});

export const { addLocation } = locationSlice.actions;

export const selectLocation = (state) => state.location.locations;

export default locationSlice.reducer;
