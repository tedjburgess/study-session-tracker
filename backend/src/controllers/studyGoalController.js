const StudyGoal = require("../models/StudyGoal");

const getStudyGoals = async (req, res) => {
  try {
    const studyGoals = await StudyGoal.find();

    res.status(200).json(studyGoals);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study goals" });
  }
};

const getStudyGoalsWithCourse = async (req, res) => {
  try {
    const studyGoals = await StudyGoal.find().populate("courseId");
    
    res.status(200).json(studyGoals);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study goals with course" });
  }
};

module.exports = {
  getStudyGoals,
  getStudyGoalsWithCourse
};