import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";
export const store = configureStore({
  // root reducer
  reducer: rootReducer,
});
