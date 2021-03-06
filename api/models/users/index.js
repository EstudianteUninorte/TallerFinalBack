const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const collection = 'users';

const userSchema = new Schema({
    name:           { type: String, required: true },
    age:            { type: Number, required: true },
    username:       { type: String, required: true },
    password:       { type: String, required: true },
    email:          { type: String, required: true },
    birthdate:      { type: String,   required: true}, //YYYY-MM-DD
    telephones:     { type: Array, required: false }
}, { timestamps: true});

const User = mongoose.model(collection, userSchema);
module.exports = User;