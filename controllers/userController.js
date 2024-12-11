const Students = require('../models/studentsModel');

const addStudents = async (req,res)=>{
    try{
        const data = req.body.data;
        if(!Array.isArray(data) || data.length ===0){
            return res.status(400).json({ message: 'Please provide an array of students' });
        }
        const result = await Students.insertMany(data,{ordered:false});
        res.status(201).json({
            status: "success",
            message: `${result.length} students successfully inserted`,
            data: result,
          });
    }catch(err){
        if (err.code === 11000) {
            // Handle duplicate key error (like duplicate id or email)
            return res.status(400).json({ message: 'Duplicate key error', error: err.message });
          }
      
          res.status(500).json({
            message: 'Failed to insert bulk students',
            err: err.message,
          });
    }
}

const fetchStudentData = async (req,res)=>{
  try{
    const result = await Students.find();
    res.status(200).json({
        status: "success",
        message: `${result.length} students successfully inserted`,
        data: result,
      });
  }catch(err){
    res.status(500).json({
      message: 'Failed to fetch students data',
      err: err.message,
    });
  }
}

module.exports = {addStudents,fetchStudentData}