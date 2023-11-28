const multer = require('multer');
const sharp = require("sharp")
const path = require("path")
const { v4: uuidv4 } = require('uuid');


const multerStorage = new multer.memoryStorage();
const allowedImageTypes = ["image/jpeg", "image/png", "image/gif"];

const multerFilter = (req, file, cb) => {
    if (allowedImageTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb({
            message: "Unsupported file format",
        }, false);
    }
};

const photoUpload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
    limits: { fileSize: 10000000 }
});


const profilePhotoResize = async (req, res, next) => {
    console.log(req.body);
    console.log(req.file);
    // Check if there is no file
    if (!req.file) return next();

    req.file.filename = `user-${uuidv4()}-${req.file.originalname}`;

    try {
        await sharp(req.file.buffer)
            .resize(250, 250)
            .toFormat("jpeg")
            .jpeg({ quality: 90 })
            .toFile(path.join(`public/Images/Profile/${req.file.filename}`));
        next();
    } catch (error) {
        // Handle error
        console.error("Error resizing profile photo:", error);
        next(error); // Pass the error to the next middleware or route handler
    }
};

const postImageResize = async (req, res, next) => {
    //check if there is no file 
    if (!req.file) return next();

    req.file.filename = `user-${Date.now()}-${req.file.originalname}`
    await sharp(req.file.buffer).resize(500, 500).toFormat("jpeg").jpeg({ quality: 90 }).toFile(path.join(`public/Images/post/${req.file.filename}`))
    next();
}


module.exports = { photoUpload, profilePhotoResize, postImageResize }; 