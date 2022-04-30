const dotenv = require("dotenv").config();
require("./database");
const morgan = require("morgan");
const express = require("express");
const routes = require("./routes");
const PORT = process.env.PORT || 4242;
const app = express();

app.use(morgan("dev"));

app.use(routes);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


app.listen(PORT);
