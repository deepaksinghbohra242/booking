const express = require('express');
const {
    registerPlaces,
    fetchPlaces,
    fetchRooms,
    hostedFlats,
    fetchAllPlaces,
    fetchFlats,
    booked,
    // placeUploadByLink
} = require("../../controller/placectrl/placeCtrl");
const fetchUser = require("../../middleware/fetchUserFromToken")
const uploadByLink = require("../../middleware/uploadByLink");

const placeRoutes = express.Router();

placeRoutes.post('/registerplace' ,fetchUser,uploadByLink, registerPlaces);
placeRoutes.get('/fetchuserplace',fetchUser,fetchPlaces);
placeRoutes.get('/fetchrooms',fetchRooms);
placeRoutes.get('/hosted',fetchUser,hostedFlats );
placeRoutes.get('/fetchall',fetchAllPlaces);
placeRoutes.get('/fetchflats',fetchFlats); 
placeRoutes.get('/booked',fetchUser,booked);
// placeRoutes.post('/upload-by-link',placeUploadByLink);

module.exports = placeRoutes;