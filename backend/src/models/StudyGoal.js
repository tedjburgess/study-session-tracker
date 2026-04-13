const mongoose = require("mongoose");

const studyGoalSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  targetHours: {
    type: Number,
    required: true,
  },
  targetSessions: {
    type: Number,
  },
  weekStartDate: {
    type: Date,
    required: true,
  },
  note: {
    type: String,
    trim: true,
  },
});

const StudyGoal = mongoose.model("StudyGoal", studyGoalSchema);

module.exports = StudyGoal;