const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const TodoSchema = new Schema({
//         text: {
//             type: String,
//             required: true,
//             trim: true,
//         },
//         isDone: {
//             type: Boolean,
//             required: true
//         },
//
//     }, {
//         timestamps: true
//     }
// );

const TodoSchema = require('./todo_model')

const userSchema = new Schema({
        name: {
            type: String,
        },
        email: {
            required: true,
            type: String,
            unique: true
        },
        username: {
            required: true,
            type: String,
            unique: true
        },
        password: {
            required: true,
            type: String
        },
        todos: [TodoSchema],
    }, {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;