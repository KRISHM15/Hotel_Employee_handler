const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

// BodyParser Middleware
app.use(express.json());

// D Config
const db = config.get("mongoURI");

// Connect to Mongoose
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected...."))
  .catch(err => console.log(err));

//Use routes
app.use("/api/addEmployee", require("./routes/api/addEmployee"));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set Static Router
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
} 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Started on port ${port}`));
