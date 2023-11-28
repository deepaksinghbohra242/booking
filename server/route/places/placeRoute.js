const express = require('express');
const {registerPlaces} = require("../../controller/placectrl/placeCtrl");
const fetchUser = require("../../middleware/fetchUserFromToken")

const placeRoutes = express.Router();

placeRoutes.post('/registerplace' ,fetchUser , registerPlaces);

module.exports = placeRoutes;