const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Place = require("../../model/place/Place");
const User = require("../../model/user/User");
const imageDownloader = require("image-downloader")


const registerPlaces = expressAsyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const place = await Place.create({
            title: req?.body?.title,
            address: req?.body?.address,
            placetype: req?.body?.placetype,
            description: req?.body?.description,
            price: req?.body?.price,
            photos: req?.body?.photos,
            owner: user?._id,
            extraInfo: req?.body?.extraInfo,
            ownername: req?.body?.ownername,
            checkIn: req?.body?.checkIn,
            checkOut: req?.body?.checkOut,
            maxGuests: req?.body?.maxGuests,
            perks: req?.body?.perks
        })
        res.json(place);
    } catch (error) {
        res.json(error);
    }
})


const fetchPlaces = expressAsyncHandler(async (req, res) => {
    try {
        const userId = req.userId;
        const userPlaces = await Place.find({ owner: userId });
        res.json(userPlaces)
    } catch (error) {
        res.json(error)
    }
})

const fetchAllPlaces = expressAsyncHandler(async(req,res)=>{
    try {
        const allPlaces = await Place.find();
        res.json(allPlaces);
    } catch (error) {
        res.json(error)
    }
})

const fetchRooms = expressAsyncHandler(async(req,res)=>{
    try {
       const rooms = await Place.find({placetype : "room" });
       res.json(rooms);
    } catch (error) {
        res.json(error)
    }
})

const fetchFlats = expressAsyncHandler(async(req,res)=>{
    try {
        const flats = await Place.find({placetype : "flat"});
        res.json(flats);
    } catch (error) {
        res.json(error);
    }
})

const hostedFlats = expressAsyncHandler(async(req,res)=>{
    try {
        const userId = req.userId;
        const hosted = await Place.find({owner : userId});
        res.json(hosted);
    } catch (error) {
        res.json(error);
    }
})

const booked = expressAsyncHandler(async (req,res)=>{
    try {
        const userId = req.userId;
        const hosted = await Place.find({owner : userId});
        try {
            const bookedPlaces = hosted.filter(place => place.isbooked === true);
            res.json(bookedPlaces);
        } catch (error) {
            console.log(error);
        }
    } catch (error) {
        res.json(error);
    }
})

const placeUploadByLink = expressAsyncHandler(async(req,res)=>{
    const {link} = req.body;
    const newName = 'photo'+Date.now()+'jpeg';
    await imageDownloader.image({
        url : link,
        dest : `server/public/place/${newName}`
    })
    res.json(newName);
})



module.exports = { 
    registerPlaces,  
    fetchPlaces ,
    fetchRooms ,
    fetchFlats,
    hostedFlats,
    fetchAllPlaces,
    booked,
    // placeUploadByLink
};