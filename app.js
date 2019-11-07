var express = require("express");
var path = require("path");
var body_parser = require("body-parser");
var node_mailer = require("nodemailer");

// 1. Initialising app
var app = express();

//Setting up jade
// 5. Specify which folder the template files are in
app.set("views", path.join(__dirname, "views"));
// 6. Set view engine - the view engine that will be used in jade
app.set("view engine", "jade");

// 2. Set body parser middleware
// 2. Middleware - Plugins that change the req or res object before it get handled by the application
app.use(body_parser.json());
app.use(
  // Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option
  body_parser.urlencoded({
    // The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
    extended: false
  })
);
// Including the public folder
app.use(express.static(path.join(__dirname, "public")));

//4. Creating a route
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/about", (req, res) => {
  res.render("about", { title: "About Us" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us" });
});
app.post("/contact/send", (req, res) => {
  var transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "devonnaidoomultimedia@gmail.com",
      pass: ""
    }
  });

  var mailOptions = {
    from: "Devon Naidoo <devonnaidoomultimedia@gmail.com>",
    to: "devonnaidoomufc@gmail.com",
    subject: "Website Submission",
    text:
      "Your submission contains the following details: Name - " +
      req.body.name +
      " Email - " +
      req.body.email +
      "Message: " +
      req.body.message,
    html:
      "<h3>Your submission contains the following details: </h3> <ul> <li> Name -" +
      req.body.name +
      "</li> <li> Email" +
      req.body.email +
      "</li> <li> Message" +
      req.body.message +
      "</li> </ul>"
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.redirect("/contact");
    } else {
      console.log("Message sent successfully: " + info.response);
      res.redirect("/");
    }
  });
});

// 3. Add port
app.listen(3000);
console.log("Server running on port 3000");
