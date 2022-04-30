const User = require("../models/user");

module.exports = {
  async getAllUsers(req, res) {
    const users = await User.findAll();

    if (!users) {
      return res.status(404).send({ message: "user not found" });
    }

    return res.json({ users });
  }
}

/*
    this file
        collection of route handlers
    Model.findAll()
        SELECT * FROM ...;
*/
