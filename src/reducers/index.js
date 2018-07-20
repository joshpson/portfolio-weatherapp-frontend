import { combineReducers } from "redux";

import currentUser from "./currentUser";
import locationSearchResults from "./locationSearchResults";
import errors from "./errors";
import featuredLocation from "./location";
import userLocations from "./userLocations";

const rootReducer = combineReducers({
  currentUser: currentUser,
  locationSearchResults: locationSearchResults,
  errors: errors,
  featuredLocation: featuredLocation,
  userLocations: userLocations
});

export default rootReducer;
