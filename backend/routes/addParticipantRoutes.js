const express = require('express');
const router = express.Router();
const addParticipants = require('../controller/addParticipants')
const auth = require('../middlewares/auth');

router.post('/addteacher' , auth ,  addParticipants.addTeacher);
router.post('/addstudent' , auth ,  addParticipants.addStudent);


module.exports = router;