import { combineReducers } from "redux";
import advertsReducer from "./advertsSlice";


const rootReducer = combineReducers({
  adverts: advertsReducer,
});

export default rootReducer;
