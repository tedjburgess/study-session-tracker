const express = require("express");
const router = express.Router();

const { getStudyGoals } = require("../controllers/studyGoalController"); //Go to controller file and take out function getStudyGoals

router.get("/", getStudyGoals);

module.exports = router;