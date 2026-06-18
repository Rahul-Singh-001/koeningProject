const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use(logger);

app.use("/api/users", userRoutes);

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

module.exports = app;