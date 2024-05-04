require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { connection } = require("./db");

const app = express();
const port = process.env.PORT || 4200;

// middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connection();

// Routes
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");
const loginRouter = require("./routes/login");

app.use("/register", registerRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`Server connected to port ${port}`);
});
