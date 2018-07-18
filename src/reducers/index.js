import { combineReducers } from "redux";

// const mockUser = {
//   id: 1,
//   first_name: "Carson",
//   last_name: "Wentz",
//   email: "cwentz@eagles.com",
//   metric: false,
//   locations: [
//     {
//       id: 1,
//       user_id: 1,
//       name: "Philadelphia",
//       latitude: "39.9526",
//       longitude: "75.1652",
//       home: true,
//       time: null,
//       image_url:
//         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Philadelphia_from_South_Street_Bridge_July_2016_panorama_3b.jpg/1200px-Philadelphia_from_South_Street_Bridge_July_2016_panorama_3b.jpg"
//     }
//   ]
// };

const initialState = {
  currentLocation: null,
  currentLocationTime: null,
  currentUser: null,
  currentUserLocations: [],
  currentUserSettings: null,
  locationSearchTerm: "",
  locationSearchResults: []
};

const currentUserReducer = (oldCurrentUser = null, action) => {
  switch (action.type) {
    case "FETCHED_PROFILES":
      return action.user;
    case "FETCHING_PROFILE": {
      return null;
    }
  }
  return oldCurrentUser;
};

const rootReducer = combineReducers({
  currentUser: currentUserReducer
});

export default rootReducer;
