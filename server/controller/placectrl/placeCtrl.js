const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Place = require("../../model/place/Place");
const User = require("../../model/user/User");
const cloudinaryUploadImg = require('../../utils/cloudnary');


const registerPlaces = expressAsyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.userId);
        const place = await Place.create({
            title: req?.body?.title,
            address: req?.body?.address,
            img_path : req?.image_path,
            placeType: req?.body?.placeType,
            description: req?.body?.description,
            price: req?.body?.price,
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
       const rooms = await Place.find({placeType : "room" });
       res.json(rooms);
    } catch (error) {
        res.json(error)
    }
})

const fetchFlats = expressAsyncHandler(async(req,res)=>{
    try {
        const flats = await Place.find({placeType : "flat"});
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
    const {img_path} = req.body;
    console.log(img_path);
    const imageByLink = await cloudinaryUploadImg(img_path);
    res.json(imageByLink?.url?.url);
})


 
module.exports = { 
    registerPlaces,  
    fetchPlaces ,
    fetchRooms ,
    fetchFlats,
    hostedFlats,
    fetchAllPlaces,
    booked,
    placeUploadByLink
};