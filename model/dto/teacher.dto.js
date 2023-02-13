/** package */
const mongoose = require ("mongoose")

/** using schema */
const schema = require("../schemas/teacher.schema")

schema.statics = {
    create: function (date, cb){
        let doc = new this (date);
        doc.save(cb);
    },
    getAll: function (query, cb){
        this.find(query, cb);
    },
    getByCode: function (query, cb){
        this.find(query, cb);
    },
    update: function (query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function (query, cb){
        this.findOneAndDelete(query);
    }
};

const dto = mongoose.model("coll_teacher", schema);
module.exports = dto