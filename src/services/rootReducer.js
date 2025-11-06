import { combineReducers } from "@reduxjs/toolkit";
import persistors from "./persistors";

import { userApisReducer, userApiReducerPath } from "./apiCalls/userApis";

// ----------------------------------------------------
//  Combine all reducers into one root reducer
//     - Include persisted slices
//     - Include RTK Query slices (usually not persisted)
// ----------------------------------------------------
const rootReducer = combineReducers({
  ...persistors,
  [userApiReducerPath]: userApisReducer,
});

export default rootReducer;
