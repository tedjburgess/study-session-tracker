const Course = require("../models/Course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Failed to get courses" });
  }
};

module.exports = {
  getCourses,
};