const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Task = require("./models/taskModel");
const taskRoute = require("./routes/taskRoutes");
const cors = require("cors");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
    origin: ["http://localhost:3000/", "https://task-app-mmvb.onrender.com"]
}));

app.use("/api/tasks", taskRoute)


// Home page route
app.get("/", (req, res) => {
    res.send("Home Page");
})


const PORT = process.env.PORT || 5000;

// Connecting Database
mongoose.set('strictQuery', false)

mongoose
    .connect(process.env.MONGO_URI)
    .then(app.listen(PORT, () => { // listening on port 5000 only after database is setup
        console.log(`Server started on port ${PORT}`);
    }))
    .catch((error) => {
        console.log(error);
    })