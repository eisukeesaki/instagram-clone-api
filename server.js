require("dotenv").config();
require("./database");
const morgan = require("morgan");
const session = require("express-session");
const express = require("express");
const routes = require("./routes");
// const passport = require("passport");
const PORT = process.env.PORT || 4242;
const app = express();

app.use(morgan("immediate"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    name: "sessionID",
    saveUninitialized: false,
    resave: false
  })
);

app.use(express.urlencoded({ extended: true }));

// app.use(passport.initialize());
// app.use(passport.session());

app.use(routes);

app.listen(PORT);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

[express.urlencoded, express.json, body-parser]
    parse req.body of POSTs

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
