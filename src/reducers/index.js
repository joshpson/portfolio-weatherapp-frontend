import { combineReducers } from "redux";
import currentUser from "./currentuser";
import locationSearchResults from "./locationsearch";
import featuredLocation from "./featuredlocation";
import errors from "./errors";
import userLocations from "./userlocations";
import windowSize from "./windowsize";
import chartSize from "./chartsize";
import fetchingLocations from "./fetchinglocations";
import fetchingUser from "./fetchinguser";

const rootReducer = combineReducers({
  currentUser: currentUser,
  locationSearchResults: locationSearchResults,
  featuredLocation: featuredLocation,
  errors: errors,
  userLocations: userLocations,
  windowSize: windowSize,
  chartSize: chartSize,
  fetchingLocations: fetchingLocations,
  fetchingUser: fetchingUser
});

export default rootReducer;
