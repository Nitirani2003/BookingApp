const mongoose = require('mongoose');

const HotelsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true

    },
    distance: {
        required: true,
        type: Number
    },
    photos: {
        type: [String],
    },
    title: {
        type: String,
        required: true

    },
    desc: {
        type: String,
        required: true

    },
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    rooms: {
        type: [String],
    },
    cheapestprice: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        default: false,
    },
});
const Hotels = mongoose.model('Hotels', HotelsSchema);
module.exports = Hotels;