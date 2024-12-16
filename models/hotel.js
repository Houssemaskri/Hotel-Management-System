const mongoose = require("mongoose");
const yup = require('yup');

const hotel = new mongoose.Schema({
    nom: String,
    adresse: String,
    nbChambres: Number,
    email: String,
});

const Hotel = mongoose.model("hotels", hotel);

const hotelSchema = yup.object({
    body: yup.object({
        nom: yup.string().required(),
        adresse: yup.string().required().typeError('adresse must be a string'),
        nbChambres: yup.number().required(),
        email: yup.string().email().required().matches(/.+\@.+\..+/)
    })
});

module.exports = {Hotel, hotelSchema};
