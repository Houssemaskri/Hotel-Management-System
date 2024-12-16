const mongoose = require("mongoose");
const yup = require('yup');

const chambre = new mongoose.Schema({
    num: Number,
    hotel: String,
    reservee: String,
    nom_client: String,
});

const Chambre = mongoose.model("chambres", chambre);

const chambreSchema = yup.object({
    body: yup.object({
        num: yup.number().required()
    })
});

module.exports = {Chambre, chambreSchema};
