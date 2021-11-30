const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    title: String
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;