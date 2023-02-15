/** packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser")

/** app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json(); 
const urlEncodedParser = bodyParser.urlencoded(
    {extended: true}
);
app.use(jsonParser);
app.use(urlEncodedParser)


const ipFn = require("./middleware/getIpAddress");
app.use("*",ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to academic rest api.")
})

// User routes loading
const userRoutes = require ("./routes/user.routes");
userRoutes(app);

// Token middleware
tkFn = require("./middleware/verifyToken")
app.use(tkFn);

// Student routes loading
const teacherRoutes = require ("./routes/teacher.routes");
teacherRoutes(app);

// Teacher routes loading
const studentRoutes = require ("./routes/student.routes");
studentRoutes(app);

// Period routes loading
const periodRoutes = require ("./routes/period.routes");
periodRoutes(app);

// Course routes loading
const courseRoutes = require ("./routes/course.routes");
courseRoutes(app);


app.listen(port, () =>{
    console.log("Server is running...");
});