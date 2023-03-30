import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../../../redux/store";
const countSelector = (state: RootState) => state.counter;

export const countsSelector = createSelector(
  countSelector,
  (count) => count.value
);
