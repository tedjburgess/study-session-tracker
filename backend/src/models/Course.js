const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  code: {
    type: String,
    required: true,
    trim: true,
  },
  semester: {
    type: String,
    required: true,
    trim: true,
  },
  colorTag: {
    type: String,
    trim: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;