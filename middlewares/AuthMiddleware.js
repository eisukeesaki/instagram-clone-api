const User = require("../models/user");

async function authenticate(req, res, next) {
  console.log("req.body.username:" + req.body.username);
  console.log("req.body.password:" + req.body.password);

  const user = await User.findOne({ where: { username: req.body.username }});
  if (!user) res.status(401).send("requested username does not match our records");
  else if (req.body.password == user.password) {
    res.locals.username = req.body.username;
    next();
  } else res.status(401).send("incorrect password");
}

function establishSession(req, res) {
  req.session.loggedIn = true;
  req.session.username = res.locals.username;

  console.log("@establishSession req.session = " + JSON.stringify(req.session, null, 4));
  console.log("@establishSession user authentication successful");
  console.log("@establishSession session establishment successful");

  res.sendStatus(200);
}

function ensureLoggedIn(req, res, next) {
  if (!req.session.loggedIn) return res.sendStatus(401);
  else next();
}

async function getSelfUser(req, res, next) {
  if (!req.session.loggedIn) return res.sendStatus(401);
  else {
    const user = await User.findOne({ where: { username: req.session.username }});
    if (!user) {
      return res.status(404).send({ message: "user not found"});
    }
    res.json(user);
  }
}

module.exports = {
  authenticate,
  establishSession,
  ensureLoggedIn,
  getSelfUser
}
