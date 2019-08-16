const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
        user_id: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true,
            trim: true,
        },
        isDone: {
            type: Boolean,
            required: true
        },
    }, {
        timestamps: true
    }
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;