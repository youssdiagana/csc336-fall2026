// Import Express
import express from 'express';

// Create the app
const app = express();

// Set the port
const port = process.env.PORT || 3000;

// Serve files from the public folder
app.use(express.static("public"));

// Create the about page
app.get("/about", (req, res) => {
  // Send a description of the app
  res.send("This is assignment 6, My Pokemon directory. Use it to search your favorite Pokemon and learn key stats about them!");
});

// Create the time page
app.get("/time", (req, res) => {
  // Get the current date and time
  let now = new Date();

  // Display when the page was accessed 
  res.send("You have accessed the Pokemon directory on " + now.toString());
});

// Start the server
app.listen(port, () => {
  // Show a message when the server starts
  console.log(`Pokemon directory app listening on port ${port}`);
});