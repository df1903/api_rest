/** packages */
const mongoose = require("mongoose");
const config = require("config");

// get the data from default/db-connections/mongodb
const mongodbInfo = config.get("db-connections.mongodb")

// configuration of the connection string.
const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`


// develop and export functions
module.exports = () => {
    // database connection process messages

    // connect to previously defined connection string
    mongoose.connect(connStr);

    // connection states

    // connected
    mongoose.connection.on("connected", () => {
        console.log("mongodb server connected!");
    });

    // disconnected
    mongoose.connection.on("disconnected", () => {
        console.log("mongodb server disconnected!");
    });

    // error
    mongoose.connection.on("error", () => {
        console.log("mongodb server connection error!");
    });

    // when the server shuts down
    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("mongodb server shutting down!");
        });
    });
}