const express = require('express');
const {
    registerPlaces,
    fetchPlaces,
    fetchRooms,
    hostedFlats,
    fetchAllPlaces,
    fetchFlats,
    booked,
    fetchByTitle,
    isBookedCtrl,
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
placeRoutes.post('/details',fetchByTitle);
placeRoutes.get('/fetchflats',fetchFlats); 
placeRoutes.put('/isbooked',isBookedCtrl);
placeRoutes.get('/booked',fetchUser,booked);
// placeRoutes.post('/upload-by-link',placeUploadByLink);

module.exports = placeRoutes;