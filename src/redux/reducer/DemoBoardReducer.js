import { createAction, createReducer } from "@reduxjs/toolkit";
const initialState = {
  nameProject: "",
};
const action = createAction("demoBoard/action");
const demoBoardReducer = createReducer(initialState, (builder) => {
  builder.addCase(action, (state, action) => {
    state.nameProject = action.payload;
  });
});

export default demoBoardReducer;
