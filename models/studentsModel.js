const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
  id: {
    type: Number, 
    required: true,
    unique: true
  },
  name: {
    type: String, 
    required: true,
    trim: true 
  },
  age: {
    type: Number,
    required: true,
    min: 0 
  },
  email: {
    type: String, 
    required: true,
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'] 
  },
  isSynced: {
    type: Number,
    default: 0, 
    enum: [0, 1] 
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

const Students = mongoose.model('Students', studentSchema);

module.exports = Students;
