const express = require("express");
const route = require("./router/userRoutes");
const validate = require("./middleware/userMiddleware");
const middleware = (req, res, next) => {
  console.log("App level Middleware is running");
  next();
};
const jsonObject = [
  {
    "What is ExpressJS":
      "Express JS is a Node.js framework designed to build API's web applications cross-platform mobile apps quickly and make node js easy.",
  },
];
const app = express();

app.use(express.json()); //Body Parser

//this is used for application level middleware where it will validate on whole application level
app.use(middleware);

app.get("/", (req, res) => {
  //   res.send("This is the Home Page. Please Route to /api/main for more details");
  res.send(
    "<html><body><h1>This is the Home Page. Please Route to /api/main for more details about ExpressJS.</h1></body></html>"
  );
});

app.get("/api/main", (req, res) => {
  res.send(jsonObject);
});
app.use("/user", route);

app.listen(5000, () => {
  console.log(`Server is running on http://localhost:5000/`);
});
