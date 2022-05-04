const { Router } = require("express");

const routes = Router();

// const passport = require("./passport");

const AuthMiddleware = require("./middlewares/AuthMiddleware");
const UserController = require("./controllers/UserController");
const PhotoController = require("./controllers/PhotoController");

routes.get("/", AuthMiddleware.ensureLoggedIn, (req, res) => res.redirect("/photos"));
routes.get("/auth", AuthMiddleware.getSelfUser);
routes.post("/auth", AuthMiddleware.authenticate, AuthMiddleware.establishSession);
routes.get("/photos", PhotoController.getAllPhotos);
// routes.get("/users", UserController.getAllUsers); // TODO: restrict access to admins

module.exports = routes;

/*

    route
        HTTP request method
        endpoint
        controller function to call

    middleware  
        app level
            bind
                app.use()
                app.HTTPMETHOD()

        router level  
            bind
                router.use(mountPath, handler)
            bound to instance of express.Router()
                /mountPath  
                    executed when request
                no mount path
                    executed for every request to router


    passport.authenticate()
        if authentication successful
            req.user = authenticated user
            establish session
            next()
        elif authentication failure
            res.sendStatus(401)

*/