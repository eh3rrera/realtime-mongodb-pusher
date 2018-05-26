const mongoose = require('mongoose');  
const Schema   = mongoose.Schema;

const taskSchema = new Schema({ 
  task:        { type: String },
});

module.exports = mongoose.model('Task', taskSchema); 