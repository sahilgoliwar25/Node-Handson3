const register = (req, res) => {
  //logic
  res.send("This is Signup Page");
};
const logout = (req, res) => {
  //logic
  res.send("This is Logout Page");
};

module.exports = { register, logout };
