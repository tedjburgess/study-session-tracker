const mongoose = require("mongoose");

const studySessionSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  goalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StudyGoal",
  },
  sessionDate: {
    type: Date,
    required: true,
  },
  durationMinutes: {
    type: Number,
    required: true,
    min: 1,
  },
  focusRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  topic: {
    type: String,
    required: true,
    trim: true,
  },
  studyMethod: {
    type: String,
    required: true,
    trim: true,
  },
  notes: {
    type: String,
    trim: true,
  },
});

const StudySession = mongoose.model("StudySession", studySessionSchema);

module.exports = StudySession;