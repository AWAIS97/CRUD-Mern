/** @format */

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// routes
const books = require("./routes/api/books");

const app = express();
// Connect Database
connectDB();
app.use(cors());

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("Hello world!"));

// use Routes
app.use("/api/books", books);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port ${port}`));
