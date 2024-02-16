const config = (key) => {
  const options = {
    loginRoute: "loginpage",
    authRoute: "payments",
    apiAuth: (token) => {
      console.log(`API authentication using token: ${token}`);
    },
  };

  return options[key];
};

export default config;
