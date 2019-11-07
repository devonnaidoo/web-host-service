var express = require("express");
var path = require("path");
var body_parser = require("body-parser");
var node_mailer = require("nodemailer");

// Initialising app
var app = express();

// Set body parser middleware
// Middleware - Plugins that change the req or res object before it get handled by the application
app.use(body_parser.json());
app.use(
  body_parser.urlencoded({
    extended: false
  })
);

// Creating a route
app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(3000);
console.log("Server running on port 3000");
