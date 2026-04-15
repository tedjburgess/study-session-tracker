const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const studySessionRoutes = require("./routes/studySessionRoutes");
const courseRoutes = require("./routes/courseRoutes");
const studyGoalRoutes = require("./routes/studyGoalRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/study-sessions", studySessionRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/study-goals", studyGoalRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});