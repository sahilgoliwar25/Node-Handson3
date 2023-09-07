const route = require("express").Router();
const { register, logout } = require("../controller/userController");
const validate = require("../middleware/userMiddleware");

// route.get("/login", (req, res) => {
//   const { age, name, role } = req.query;
//   res.send({ age, name, role });
// });
route.get("/login", (req, res) => {
  const { age, name, role } = req.query;
  res.send({ age, name, role });
});

route.get("/logout", logout); // function is written in UserController Folder

//example of routing level middleware
route.get("/signup/:age", validate, register); //validate is written in middleware

route.get("/userid/:age", validate, (req, res) => {
  const age = req.params.age;
  if (age >= 18) {
    res.send("User is allowed");
  } else {
    res.send("User is not allowed");
  }
});

module.exports = route;
