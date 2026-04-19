const StudySession = require("../models/StudySession");

const getStudySessions = async (req, res) => {
  try {
    const studySessions = await StudySession.find();

    res.status(200).json(studySessions);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study sessions" });
  }
};

const getStudySessionById = async (req, res) => {
  try {
    const sessionId = req.params.id;
    if (!require("mongoose").Types.ObjectId.isValid(sessionId)) {
      return res.status(400).json({message: "Invalid study session id format"});
    }
    const studySession = await StudySession.findById(sessionId);
    if (!studySession) {
      return res.status(404).json({ message: "No study session associated with the requested id"})
    }

    res.status(200).json(studySession);
  } catch (error) {
    res.status(500).json({ message: "Failed to get study session" });
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

const patchStudySessionById = async (req, res) => {
  try {
    const sessionId = req.params.id;
    if (!require("mongoose").Types.ObjectId.isValid(sessionId)) {
      return res.status(400).json({ message: "Invalid study session id format" });
    }

    const fieldsToUpdate = req.body;
    const allowedFields = [
      "courseId",
      "goalId",
      "sessionDate",
      "durationMinutes",
      "focusRating",
      "topic",
      "studyMethod",
      "notes",
    ];

    const updateKeys = Object.keys(fieldsToUpdate);

    if (updateKeys.length === 0) {
      return res.status(400).json({
        message: "At least one field is required for update",
      });
    }

    const hasInvalidField = updateKeys.some(
      (field) => !allowedFields.includes(field)
    );

    if (hasInvalidField) {
      return res.status(400).json({
        message: "Request body contains invalid update fields",
      });
    }

    const updateSession = await StudySession.findByIdAndUpdate(
      sessionId,
      fieldsToUpdate,
      { new: true } //Makes sure to return the updated session
    );

    if (!updateSession) {
      return res.status(404).json({
        message: "No study session associated with the requested id",
      });
    }

    res.status(200).json(updateSession);
  } catch (error) {
    res.status(500).json({ message: "Failed to update study session" });
  }
};

module.exports = {
  getStudySessions,
  createStudySession,
  getStudySessionById,
  patchStudySessionById
};
