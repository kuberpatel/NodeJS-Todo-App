const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    description: String,
    category: String,
    dueDate: { type: Date },
});

Todo = mongoose.model('Todo', taskSchema);
module.exports=Todo;
