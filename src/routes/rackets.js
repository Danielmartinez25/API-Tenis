const express = require("express");
const router = express.Router();
const { list, listAll } = require("../controller/racketsController.js");
router 
.get("/list/:id",list)
.get("/list",listAll)
module.exports = router;