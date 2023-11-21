const User = require('../../model/user/User');
const generateToken = require('../../config/token/generateToken')
const expressAsyncHandler = require('express-async-handler');


const test = expressAsyncHandler((req,res) => {
    res.json('test okkkk');
})

//user register 
const userRegisterCtrl = expressAsyncHandler(async(req,res)=>{
    const userExists = await User.findOne({email : req?.body?.email});
    if(userExists) throw new Error("User Already exists");
    try {
        const user = await User.create({
            name : req?.body?.name ,
            email : req?.body?.email,
            password : req?.body?.password
        });
        res.json(user);
    } catch (error) {
        res.json(error);
    }
})

//user login
const userLoginCtrl = expressAsyncHandler(async(req,res)=>{
    const{email , password} = req.body;
    const userFound = await User.findOne({email});
    if(userFound && (await userFound.isPasswordMatched(password))){
        res.json({
            id : userFound?._id,
            name : userFound?.name,
            email : userFound?.email,
            token : generateToken(userFound?._id)
        });
    }
    else{
        res.status(401);
        throw new Error('Invalid Login Crediential');
    }

})
module.exports = {
    test,
    userRegisterCtrl,
    userLoginCtrl
} 