const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

// Enable CORS
app.use(cors());

// Middleware to parse JSON in request body
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Endpoint to get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
