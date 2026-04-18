const StudySession = require("../models/StudySession");

const getStudySessions = async (req, res) => {
  try {
    const studySessions = await StudySession.find();

    res.status(200).json(studySessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study sessions" });
  }
};

const createStudySession = async (req, res) => {
  try {
    // 1. Get the incoming JSON body
    const newSessionData = req.body;

    // 2. Check required fields before saving
    if (
      !newSessionData.courseId ||
      !newSessionData.sessionDate ||
      !newSessionData.durationMinutes ||
      !newSessionData.focusRating ||
      !newSessionData.topic ||
      !newSessionData.studyMethod
    ) {
      return res.status(400).json({
        message:
          "courseId, sessionDate, durationMinutes, focusRating, topic, and studyMethod are required",
      });
    }

    // 3. Save to MongoDB
    const createdSession = await StudySession.create(newSessionData);

    // 4. Send success response
    res.status(201).json(createdSession);
  } catch (error) {
    res.status(500).json({ message: "Failed to create study session" });
  }
};

module.exports = {
  getStudySessions,
  createStudySession,
};

