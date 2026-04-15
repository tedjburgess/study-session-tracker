const StudySession = require("../models/StudySession");

const getStudySessions = async (req, res) => {
  try {
    const studySessions = await StudySession.find();

    res.status(200).json(studySessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study sessions" });
  }
};

module.exports = {
  getStudySessions,
};