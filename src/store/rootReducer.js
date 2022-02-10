import { combineReducers } from "redux";
import advertsReducer from "./adverts/adverts.reducer";
import authReducer from "./auth/auth.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  adverts: advertsReducer,
});

export default rootReducer;
