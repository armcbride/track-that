//dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require('dotenv').config();
//creates port
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
//builds app connections with express, to public folder of HTML
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//connection to mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify:false });

//routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on: http://localhost:${PORT}`);
});
