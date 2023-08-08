const mongoose = require("mongoose");
const racketSchema = new mongoose.Schema(
{
    name : {
        type : String,
        required : [true,"name Required"],
    },
    detail : {
        type : String,
        required : [true,"detail required"]
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("Racket",racketSchema);