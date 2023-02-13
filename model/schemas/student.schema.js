/** package */

// Use the mongoose package because it has the schemas internally
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema creation */
const studentSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    lastname:{
        type: "String",
        required: true
    },
    phone:{
        type: "String",
        required: true
    },
    email:{
        type: "String",
        required: true,
        unique: true
    },
    career:{
        type: "String",
        required: true
    }
});

/** schema exportation */
studentSchema.plugin(validator);
module.exports = studentSchema;