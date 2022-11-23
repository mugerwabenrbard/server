const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required:true, ref: 'User'}, 
    firstName: {type:String, required: true},
    lastName: {type:String, required: true},
    gender: {type:String},
    phone: {type:String},
    DOB: {type:String, required: true},
    email: {type:String},
    address: {type:String},
    maritalStatus: {type:String},
    age: {type:String, required: true},
    bloodGroup: {type:String},
    bloodPressure: {type:String},
}, {timestamps:true})

module.exports = mongoose.model('patient', patientSchema)