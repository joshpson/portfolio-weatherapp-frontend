const locationSearchResults = (oldlocationSearchResults = [], action) => {
  switch (action.type) {
    case "FETCHED_NEW_LOCATION_SEARCH_RESULTS":
      return action.results.predictions;
    case "FETCHING_NEW_LOCATION_SEARCH_RESULTS":
      return [];
  }
  return oldlocationSearchResults;
};

export default locationSearchResults;
