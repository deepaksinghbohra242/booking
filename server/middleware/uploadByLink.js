const cloudinaryUploadImg = require('../utils/cloudnary');
const expressAsyncHandler = require('express-async-handler');

const placeUploadByLink = expressAsyncHandler(async(req,res,next)=>{
    const {img_path} = req.body;
    const imageByLink = await cloudinaryUploadImg(img_path);
    req.image_path = imageByLink?.url?.url;
    next();
})


module.exports = placeUploadByLink