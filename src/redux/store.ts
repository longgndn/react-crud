import langueSlice from "@common/components/NavBar/slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [langueSlice.name]: langueSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  //   devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
