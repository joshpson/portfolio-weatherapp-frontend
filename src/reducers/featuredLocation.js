const initialState = {
  location: {},
  weather: {}
};

const featuredLocation = (oldfeaturedLocation = initialState, action) => {
  switch (action.type) {
    case "FEATURED_LOCATION":
      return action.location;
    case "CLEAR_FEATURED_LOCATION":
      return initialState;
    default:
      return oldfeaturedLocation;
  }
};

export default featuredLocation;
