require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const createError = require("http-errors");
const mongoDB = require("./database/connect");
const app = express();
mongoDB();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(function(req,res,next) {
    next(createError(401))
})
app.use(function (err,req,res,next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).json({
        ok : false,
        status : err.status || 500,
        msg : err.message ? err.message : "Ups hubo un error en la app"
    });
});
app.listen(process.env.PORT, () => {
    console.log(
        `Servidor corriendo en el puerto http://localhost:${process.env.PORT}`);

})
module.exports = app;