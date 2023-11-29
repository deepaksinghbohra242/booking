const express = require('express');
const {
    userRegisterCtrl,
    userLoginCtrl,
    fetchUserProfile,
    logout,
    uploadImg
} = require('../../controller/userCtrl/UserCtrl');
const fetchUserFromToken  = require('../../middleware/fetchUserFromToken');
const { photoUpload, profilePhotoResize } = require('../../middleware/photoUpload');


const userRoutes = express.Router(); 

userRoutes.post('/register' , userRegisterCtrl);
userRoutes.post('/login', userLoginCtrl);
userRoutes.get('/profile',fetchUserProfile);
userRoutes.post('/upload-img',fetchUserFromToken, uploadImg);
userRoutes.post('/logout',logout)
 
module.exports = userRoutes;
