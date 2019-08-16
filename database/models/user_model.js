const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    }, {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;