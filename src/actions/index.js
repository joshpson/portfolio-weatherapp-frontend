const url = "https://pacific-spire-41407.herokuapp.com/api/v1";

const token = () => {
  return localStorage.getItem("token");
};

export { token, url };
