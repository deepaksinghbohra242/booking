const User = require('../../model/user/User');
const expressAsyncHandler = require('express-async-handler');


const test = expressAsyncHandler((req,res) => {
    res.json('test okkkk');
})


module.exports = {
    test
} 