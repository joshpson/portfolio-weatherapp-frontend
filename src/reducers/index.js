import { combineReducers } from "redux";
import currentUser from "./user";

const initialState = {
  currentLocation: null,
  currentLocationTime: null,
  currentUser: null,
  currentUserLocations: [],
  currentUserSettings: null,
  locationSearchTerm: "",
  locationSearchResults: []
};

const rootReducer = combineReducers({
  currentUser: currentUser
});

export default rootReducer;
