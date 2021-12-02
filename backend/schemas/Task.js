const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    id: Number,
    text: String,
    username: String,
    isComplete: Boolean
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;