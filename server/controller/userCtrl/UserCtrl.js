const User = require('../../model/user/User');
const generateToken = require('../../config/token/generateToken')
const expressAsyncHandler = require('express-async-handler');
const {verifyToken} = require('../../config/token/generateToken')


//user register 
const userRegisterCtrl = expressAsyncHandler(async(req,res)=>{
    const userExists = await User.findOne({email : req?.body?.email});
    if(userExists) throw new Error("User Already exists");
    try {
        const user = await User.create({
            firstName : req?.body?.firstName,
            lastName : req?.body?.lastName,
            userName : req?.body?.userName,
            email : req?.body?.email,
            phone : req?.body?.phone,
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
        const token = generateToken(userFound?.id)
        res.cookie('token', token).json({
            id : userFound?._id,
            name : userFound?.name,
            email : userFound?.email,
            token
        });
    }
    else{
        res.status(401);
        throw new Error('Invalid Login Crediential');
    }
})

//fetch user profile
// const fetchUserProfile = expressAsyncHandler(async (req, res) => {
//     const { token } = req.cookies;
//     // console.log(process.env.JWT_KEY);
//     const decoded = verifyToken(token?.data);
//     // console.log(decoded);
//     console.log(decoded)
//     res.json("decoded");
// });



module.exports = {
    userRegisterCtrl,
    userLoginCtrl,
    // fetchUserProfile
} 