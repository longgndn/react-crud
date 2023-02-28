import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  langue: string;
};

const initialState: InitialState = {
  langue: "vi",
};

const langueSlice = createSlice({
  name: "langue",
  initialState,
  reducers: {
    langueChange(state, action) {
      state.langue = action.payload;
    },
  },
});

export default langueSlice;

export const { langueChange } = langueSlice.actions;
