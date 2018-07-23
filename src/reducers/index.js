import { combineReducers } from "redux";

import currentUser from "./currentUser";
import locationSearchResults from "./locationSearchResults";
import featuredLocation from "./featuredLocation";
import errors from "./errors";
import userLocations from "./userLocations";
import windowSize from "./windowSize";

const rootReducer = combineReducers({
  currentUser: currentUser,
  locationSearchResults: locationSearchResults,
  featuredLocation: featuredLocation,
  errors: errors,
  userLocations: userLocations,
  windowSize: windowSize
});

export default rootReducer;
