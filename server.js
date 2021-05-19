const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const app = express();

// CONNECT DATABASE

connectDB();

// INIT MIDDLEWARE
app.use(express.json({ extended: false }));

// DEFINE ROUTES
app.use("/api/users", require("./routes/api/users"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));

//Serve STATIC ASSETS IN PRODUCTION
if (process.env.NODE.ENV === "production") {
  //SET STATIC FOLDER
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
