const initialErrors = {
  login: null
};

const errors = (oldErrors = initialErrors, action) => {
  switch (action.type) {
    case "USER_AUTHENTICATION_FAILED":
      return { ...oldErrors, login: "Invalid login credentials" };
    default:
      return { ...oldErrors, login: null };
  }
  return oldErrors;
};

export default errors;
