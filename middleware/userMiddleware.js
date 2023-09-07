const validate = (req, res, next) => {
  const age = req.params.age;
  if (age >= 18) {
    console.log("Routing level Middleware is running");
    next();
  } else {
    res.send({ msg: "user not allowed" });
  }
};
module.exports = validate;
