const cloudinary = require('cloudinary').v2;
require("dotenv").config();

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_SECRET_KEY
});  

const cloudinaryUploadImg = async(fileToUpload) =>{
    try {
        const data = await cloudinary.uploader.upload(fileToUpload,{
            resource_type : "auto",
            allowed_formats : ['png' ,'jpg','jpeg','svg','ico','jfif','webp']
        })
        return{ 
            url : data,
        }
    } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        return { error: "Image upload failed" };
    }
}   

module.exports = cloudinaryUploadImg;