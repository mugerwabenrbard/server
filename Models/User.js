const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {type: String, required: [true, 'Please add Username'], unique: true},
    department: {type: String, required:true},
    password: {type: String, required: true},
}, {timestamps:true})

module.exports = mongoose.model('user', userSchema)