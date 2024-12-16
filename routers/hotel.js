const express =  require('express');
const router = express.Router();
const {Hotel, hotelSchema} = require('../models/hotel');
const validate = require('../middlewares/validate');

router.get('/list', async (req, res, next)=>{
    const hotels = await Hotel.find();
    res.send(hotels);
});

router.post('/add', validate(hotelSchema), async (req, res, next)=>{
    const hotel = new Hotel({ 
        nom: req.body.nom, 
        adresse: req.body.adresse,
        nbChambres: 0,
        email: req.body.email
    });
    await hotel.save();
    res.send("hotel has been created");
});

router.get('/getbyid/:id', async (req, res, next)=>{
    const hotel = await Hotel.findById(req.params.id);
    res.send(hotel);
});

router.delete('/delete/:id', async (req, res, next)=>{
    await Hotel.findByIdAndDelete(req.params.id);
    res.send("hotel has been deleted");
});

module.exports = router;
