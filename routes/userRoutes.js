const express = require("express");
const { addStudents, fetchStudentData } = require("../controllers/userController");
const router = express.Router();

router.post('/addStudents',addStudents);
router.get('/fetchStudents',fetchStudentData);

module.exports = router;