/** package */

// Use the mongoose package because it has the schemas internally
const mongoose = require("mongoose");

/** Schema creation */
const courseSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    name:{
        type: "String",
        required: true
    }
});

/** schema exportation */
module.exports = courseSchema;