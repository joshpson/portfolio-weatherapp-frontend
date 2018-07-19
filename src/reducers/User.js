const currentUser = (oldCurrentUser = null, action) => {
  switch (action.type) {
    case "FETCHED_USER":
      return action.user;
    default:
      return null;
  }
  return oldCurrentUser;
};

export default currentUser;
