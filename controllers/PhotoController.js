const Photo = require("../models/photo");

module.exports = {
  async getAllPhotos(req, res) {
    const photos = await Photo.findAll();

    if (!photos) {
      return res.status(404).send({ message: "photos not found"});
    }

    return res.json({ photos });
  }
}
