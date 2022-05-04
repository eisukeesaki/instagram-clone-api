const User = require("../models/user");

async function getAllUsers(req, res) {
  const users = await User.findAll();
  
  if (!users) {
    return res.status(404).send({ message: "user not found" });
  }
  
  return res.json({ users });
}

module.exports = {
  getAllUsers
}

/*
    this file
        collection of route handlers
    Model.findAll()
        SELECT * FROM ...;
*/
