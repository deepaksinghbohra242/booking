const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Place = require("../../model/place/Place");
const User = require("../../model/user/User");


const check = expressAsyncHandler(async (req, res) => {
    const userId = req.userId;
    res.json(userId);
})

const registerPlaces = expressAsyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const place = await Place.create({
            title : req?.body?.title,
            address : req?.body?.address,
            placetype : req?.body?.placetype,
            description: req?.body?.description,
            price: req?.body?.price,
            photos : req?.body?.photos,


        })
        res.json(user);
    } catch (error) {
        res.status(400).send("Error while uploading place. Try again later.");
    }
})

module.exports = { registerPlaces };