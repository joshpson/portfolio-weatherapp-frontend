import { combineReducers } from "redux";
import currentUser from "./user";
import errors from "./errors";

// const initialState = {
//   currentLocation: null,
//   currentLocationTime: null,
//   currentUser: null,
//   currentUserLocations: [],
//   currentUserSettings: null,
//   locationSearchTerm: "",
//   locationSearchResults: []
// };

const rootReducer = combineReducers({
  currentUser: currentUser,
  errors: errors
});

export default rootReducer;
