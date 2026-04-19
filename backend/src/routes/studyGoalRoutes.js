const express = require("express");
const router = express.Router();

const { getStudyGoals, getStudyGoalsWithCourse } = require("../controllers/studyGoalController"); //Go to controller file

router.get("/", getStudyGoals);
router.get("/with-course", getStudyGoalsWithCourse);

module.exports = router;