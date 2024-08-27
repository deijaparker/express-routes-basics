const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Define Routes and Handle HTTP GET Requests

app.get("/", (req, res) => {
  res.send(
    "Welcome to the root route. This is the data requested from the server."
  );
});

app.get("/home", (req, res) => {
  res.render("homepage"); // Render the 'homepage.ejs' view
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Information");
});

// Start the Server and Listen on Port 3000

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
