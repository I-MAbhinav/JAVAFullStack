//import the express from library
const express = require("express");
const dbConnect = require("./config/db");

const todoRoutes = require("./routes/todo");


//create the app
const app = express();

app.use(express.json());

dbConnect();

//connect the routes
app.use("/api/v1", todoRoutes);

//app listen port 
app.listen(3000, () => {
    console.log("Server started at 3000 port");
})