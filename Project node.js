// Import Express
const express = require("express");

// Create App
const app = express();

// Middleware
app.use(express.json());

// Array to store messages
let messages = [];

/* -------------------------------
   SEND MESSAGE API
   Method: POST
   URL: /messages
--------------------------------*/
app.post("/messages", (req, res) => {
  const { user, text } = req.body;

  messages.push({
    user: user,
    text: text
  });

  res.send("Message Sent");
});

/* -------------------------------
   VIEW ALL MESSAGES API
   Method: GET
   URL: /messages
--------------------------------*/
app.get("/messages", (req, res) => {
  res.json(messages);
});

/* -------------------------------
   START SERVER
--------------------------------*/
app.listen(3000, () => {
  console.log("Chat Server running on port 3000");
});
