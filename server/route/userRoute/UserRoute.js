const express = require('express');
const {
    test
} = require('../../controller/userCtrl/UserCtrl');


const userRoutes = express.Router();

userRoutes.get('/test' , test);

module.exports = userRoutes;