require("dotenv").config();

const connectDB = require("../config/db");
const Course = require("../models/Course");
const StudyGoal = require("../models/StudyGoal");
const StudySession = require("../models/StudySession");

const seedDatabase = async () => {
  try {
    await connectDB();

    await Course.deleteMany();
    await StudyGoal.deleteMany();
    await StudySession.deleteMany();

    const courses = await Course.insertMany([
      {
        name: "Fullstack Development",
        code: "DA219B",
        semester: "Spring 2026",
        colorTag: "blue",
      },
      {
        name: "Database Systems",
        code: "DA123A",
        semester: "Spring 2026",
        colorTag: "green",
      },
      {
        name: "Software Engineering",
        code: "DA210A",
        semester: "Spring 2026",
        colorTag: "purple",
      },
      {
        name: "Discrete Mathematics",
        code: "MA101A",
        semester: "Spring 2026",
        colorTag: "orange",
      },
      {
        name: "Academic Writing",
        code: "EN105A",
        semester: "Spring 2026",
        colorTag: "red",
      },
    ]);

    const studyGoals = await StudyGoal.insertMany([
      {
        courseId: courses[0]._id,
        targetHours: 10,
        targetSessions: 4,
        weekStartDate: new Date("2026-04-13"),
        note: "Focus on backend routes and MongoDB.",
      },
      {
        courseId: courses[1]._id,
        targetHours: 6,
        targetSessions: 3,
        weekStartDate: new Date("2026-04-13"),
        note: "Review database relationships.",
      },
      {
        courseId: courses[2]._id,
        targetHours: 5,
        targetSessions: 2,
        weekStartDate: new Date("2026-04-13"),
        note: "Prepare seminar notes.",
      },
      {
        courseId: courses[3]._id,
        targetHours: 4,
        targetSessions: 2,
        weekStartDate: new Date("2026-04-13"),
        note: "Practice proof exercises.",
      },
      {
        courseId: courses[4]._id,
        targetHours: 3,
        targetSessions: 2,
        weekStartDate: new Date("2026-04-13"),
        note: "Draft report introduction.",
      },
    ]);

    await StudySession.insertMany([
      {
        courseId: courses[0]._id,
        goalId: studyGoals[0]._id,
        sessionDate: new Date("2026-04-14"),
        durationMinutes: 90,
        focusRating: 3,
        topic: "Express router and controller structure",
        studyMethod: "coding practice",
        notes: "Built first GET route and tested it in Postman.",
      },
      {
        courseId: courses[0]._id,
        goalId: studyGoals[0]._id,
        sessionDate: new Date("2026-04-15"),
        durationMinutes: 75,
        focusRating: 4,
        topic: "Mongoose models and ObjectId references",
        studyMethod: "code review",
        notes: "Reviewed relationships between courses and sessions.",
      },
      {
        courseId: courses[1]._id,
        goalId: studyGoals[1]._id,
        sessionDate: new Date("2026-04-15"),
        durationMinutes: 60,
        focusRating: 4,
        topic: "Database schema design",
        studyMethod: "reading",
        notes: "Studied how references connect collections.",
      },
      {
        courseId: courses[3]._id,
        goalId: studyGoals[3]._id,
        sessionDate: new Date("2026-04-16"),
        durationMinutes: 45,
        focusRating: 2,
        topic: "Logic and set notation",
        studyMethod: "problem solving",
        notes: "Focus was lower because exercises were difficult.",
      },
      {
        courseId: courses[4]._id,
        goalId: studyGoals[4]._id,
        sessionDate: new Date("2026-04-16"),
        durationMinutes: 50,
        focusRating: 5,
        topic: "Report outline",
        studyMethod: "writing",
        notes: "Created a first structure for the lab report.",
      },
    ]);

    console.log("Database seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error.message);
    process.exit(1);
  }
};

seedDatabase();