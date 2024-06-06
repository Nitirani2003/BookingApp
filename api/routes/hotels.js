const express = require('express');
const router = express.Router();
const Hotels = require('../models/Hotels');
const { jwtAuthMiddleware, generateToken } = require('./../../jwt');

//CREATE
router.post('/', async(req, res) => {
        const data = req.body
        const newHotel = new Hotels(data);
        try {
            const savedHotel = await newHotel.save()
            res.status(200).json(savedHotel)
        } catch (err) {
            res.status(500).json(err);
        }
    })
    //UPDATE


//DELETE



//GET

//GET ALL










module.exports = router;