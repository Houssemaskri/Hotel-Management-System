const express = require('express');
const router = express.Router();
const { Hotel } = require('../models/hotel');
const { Chambre, chambreSchema } = require('../models/chambre');
const validate = require('../middlewares/validate');

router.get('/list', async (req, res, next) => {
    const chambres = await Chambre.find();
    res.send(chambres);
});

router.post('/add/:id', validate(chambreSchema), async (req, res, next) => {
    const chambre = new Chambre({
        num: req.body.num,
        hotel: req.params.id,
        reservee: "false",
        nom_client: "",
    });
    await chambre.save();

    const hotel = await Hotel.findById(req.params.id);  
    hotel.nbChambres += 1;
    await hotel.save();

    res.send("chambre has been created");
});

router.put('/reserve/:id/:nom', async (req, res, next) => {
    const chambre = await Chambre.findById(req.params.id);
    if (!chambre) {
        return res.status(404).send("Chambre not found");
    }
    if (chambre.reservee === "true") {
        return res.status(400).send("Chambre is already reserved");
    }
    chambre.reservee = "true";
    chambre.nom_client = req.params.nom;
    await chambre.save();
    res.send("chambre has been reserved");
});


router.get('/list/:hotelId', async (req, res, next) => {
    const chambres = await Chambre.find({ hotel: req.params.hotelId });
    res.send(chambres);
});

module.exports = router;