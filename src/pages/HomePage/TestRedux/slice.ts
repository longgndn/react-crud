import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    khiembamcong(state) {
      state.value = state.value + 1;
    },
    down(state) {
      state.value -= 1; // state.value = state.value -1
    },
    clear(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { khiembamcong, down, clear } = counterSlice.actions;
