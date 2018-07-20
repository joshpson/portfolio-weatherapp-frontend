const initialState = {
  location: {},
  weather: {}
};

const featuredLocation = (oldfeaturedLocation = initialState, action) => {
  switch (action.type) {
    case "FEATURED_LOCATION":
      return action.location;
  }
  return oldfeaturedLocation;
};

export default featuredLocation;
