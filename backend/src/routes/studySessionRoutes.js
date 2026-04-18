const express = require("express");
const router = express.Router();

const { getStudySessions, createStudySession } = require("../controllers/studySessionController"); //Go to controller file and take out function getStudySessions

router.get("/", getStudySessions);
router.post("/", createStudySession);

module.exports = router;