const { Router } = require("express");

const routes = Router();

const UserController = require("./controllers/UserController");
const PhotoController = require("./controllers/PhotoController");

routes.get("/users", UserController.getAllUsers);
routes.get("/photos", PhotoController.getAllPhotos);

module.exports = routes;

