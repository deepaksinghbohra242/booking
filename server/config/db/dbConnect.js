const mongoose = require('mongoose');

// const dbConnect = async() =>{
//     try{
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("MongoDB Connected...");
        
//     }
//     catch(error){
//         console.log(`Error ${error}`)
//     }
// }
mongoose.connect("mongodb://127.0.0.1:27017/booking").then(()=>{
    console.log("db successfully connected")
 }).catch((e)=>{
    console.log("errror occure while connecting")
 })
// module.exports = dbConnect;