const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const db = require("./models");

const apiRoutes = require(".routes/api-routes.js");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});


app.get("/workout", (req, res)=> {
  db.workout.find({})
  .then(dbWorkout =>{
    res.json(dbWorkout);
  })
  .catch(err => {
    res.json(err);
  })
})