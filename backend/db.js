const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://krishsarma03:krishna%40513@cluster0.ckicfyf.mongodb.net/todo_app");

const TodoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', TodoSchema);

module.exports = {
    todo : todo
    // or 
    //todo (same thing)
}