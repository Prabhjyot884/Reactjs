const mongoose = require('mongoose');
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 10
    },
    cpassword: {
        type: String,
        required: true,
        minlength: 10
    },
    tokens : [
        {
            token: {
                type : String,
                required : true
            }
        }
    ]
})




const User = new mongoose.model('USER' , userSchema);

module.exports = User;