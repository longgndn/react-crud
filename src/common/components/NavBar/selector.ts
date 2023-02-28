import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./../../../redux/store";
const langSelector = (state: RootState) => state.langue;

export const langueSelector = createSelector(
  langSelector,
  (lang) => lang.langue
);
