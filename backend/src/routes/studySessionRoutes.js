const express = require("express");
const router = express.Router();

const { getStudySessions } = require("../controllers/studySessionController"); //Go to controller file and take out function getStudySessions

router.get("/", getStudySessions);

module.exports = router;