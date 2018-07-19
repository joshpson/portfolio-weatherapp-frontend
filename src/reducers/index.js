import { combineReducers } from "redux";

import currentUser from "./currentUser";
import errors from "./errors";
import featuredLocation from "./location";
import userLocations from "./userLocations";

const rootReducer = combineReducers({
  currentUser: currentUser,
  errors: errors,
  featuredLocation: featuredLocation,
  userLocations: userLocations
});

export default rootReducer;
