
const dotenv = require('dotenv')
dotenv.config();

const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

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