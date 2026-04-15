const express = require("express");
const router = express.Router();

const { getCourses } = require("../controllers/courseController"); //Go to controller file and take out function getCourses

router.get("/", getCourses);

module.exports = router;