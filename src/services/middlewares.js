import { userApiMiddleware } from "./apiCalls/userApis";

const middlewares = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false, // Disable for RTK Query cache + redux-persist
  }).concat(userApiMiddleware);

export default middlewares;
