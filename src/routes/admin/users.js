const express = require("express");
const router = express.Router();
const { create, update, remove, removeAll } = require("../../controller/admin/adminControllerUser");
router
    .post("/create", create)
    .put("/update", update)
    .delete("/delete/:id", remove)
    .delete("/remove", removeAll)
module.exports = router;