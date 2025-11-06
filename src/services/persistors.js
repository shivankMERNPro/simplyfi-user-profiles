import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//--------------------------------------------------
// Slices import all slice reducers
//--------------------------------------------------
import { userReducer } from "./slices/userSlice";

//--------------------------------------------------
// Slice-level persist configs
//--------------------------------------------------
const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["userData"],
};

//---------------------------------------------------
// Wrap slices with persistReducer individually
//---------------------------------------------------
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

//---------------------------------------------------
// Export all collections of persisters
//---------------------------------------------------
const persistors = {
  user: persistedUserReducer,
};

export default persistors;
