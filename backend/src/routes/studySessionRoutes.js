const express = require("express");
const router = express.Router();

const { getStudySessions, createStudySession, getStudySessionById, patchStudySessionById, deleteStudySessionById, getStudySessionsWithCourse, getStudySessionsByCourse } = require("../controllers/studySessionController"); //Go to controller file

router.get("/", getStudySessions);
router.post("/", createStudySession);
router.get("/with-course", getStudySessionsWithCourse);
router.get("/filter/by-course/:courseId", getStudySessionsByCourse);
router.get("/:id", getStudySessionById);
router.patch("/:id", patchStudySessionById);
router.delete("/:id", deleteStudySessionById);

module.exports = router;