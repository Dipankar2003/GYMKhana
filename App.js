const express = require("express");
const LoginRoute = require("./Routes/LoginRoutes");
const HomeRoute = require("./Routes/HomeRoutes");
const coordinatorRoute = require("./Routes/coordinatorRoutes");
const StaffAdvRouter = require("./Routes/staffAdvRoutes");

const cookieParser = require("cookie-parser");

const path = require("path");
const app = express();
const bodyParser = require("body-parser");

app.use(express.json());
app.set("view engine", "ejs");
app.set(path.join(__dirname, "public"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//change
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/", HomeRoute);
app.use("/login", LoginRoute);
app.use("/login/coordinatorLogin", coordinatorRoute);
app.use("/login/staffAdvLogin", StaffAdvRouter);

module.exports = app;
