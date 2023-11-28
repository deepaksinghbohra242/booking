const express = require('express');
const {
    userRegisterCtrl,
    userLoginCtrl,
    fetchUserProfile,
    logout,
    uploadImg
    // profilePhotoUpload,
} = require('../../controller/userCtrl/UserCtrl');
// const {photoUpload,profilePhotoResize} = require("../../middleware/photoUpload")


const userRoutes = express.Router(); 

userRoutes.post('/register' , userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);
userRoutes.get('/profile' , fetchUserProfile);
userRoutes.post('/upload-img' , uploadImg);
// userRoutes.post('/uploadprofilephoto',photoUpload.single('Image'),profilePhotoResize,profilePhotoUpload);
userRoutes.post('/logout',logout)

module.exports = userRoutes;
