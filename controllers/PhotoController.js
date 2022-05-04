const Photo = require("../models/photo");

async function getAllPhotos(req, res) {
  if (!req.session.loggedIn) res.sendStatus(401);
  else {
    const photos = await Photo.findAll();
    if (!photos) {
      return res.status(404).send({ message: "photos not found"});
    }
    res.json({ photos });
  }
}

module.exports = {
  getAllPhotos
}
