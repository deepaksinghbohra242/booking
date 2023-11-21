const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

//middleware
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    //hash password 
    const salt = bcrypt.genSaltSync(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})

userSchema.methods.isPasswordMatched = async function (enterdPassword){
    return await bcrypt.compare(enterdPassword,this.password);
}

const User = mongoose.model("User" , userSchema);

module.exports = User;