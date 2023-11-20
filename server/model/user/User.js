const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        require : [true , 'Name is required'],
        type: String,
    },
    email : {
        require : [true , 'Email is required'],
        type : String,
        unique : true
    },
    password : {
        require : [true , 'Password is required'],
        type : String
    }
});

const User = mongoose.model("User" , userSchema);

module.exports = User;