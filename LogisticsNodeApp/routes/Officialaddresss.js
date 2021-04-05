const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Officialaddress = require("../models/Officialaddress");

router.get("/", verify, async (req, res) => {
  try {
    const Officialaddresss = await Officialaddress.find();
    res.json(Officialaddresss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const officialaddress = await Officialaddress.findById(req.params.id);
    res.json({
        _id: officialaddress._id,
        city: officialaddress.city,
        cityCode: officialaddress.cityCode,
        countyCode: officialaddress.countyCode,
        crossStreet: officialaddress.crossStreet,
        name: officialaddress.name,
        pOBoxNumber: officialaddress.pOBoxNumber,
        postalCode: officialaddress.postalCode,
        provinceCode: officialaddress.provinceCode,
        state: officialaddress.state,
        streetAddressOne: officialaddress.streetAddressOne,
        streetAddressTwo: officialaddress.streetAddressTwo,
        streetAddressThree: officialaddress.streetAddressThree,
        createdAt: officialaddress.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const officialaddress = new Officialaddress ({
        city: req.body.city,
        cityCode: req.body.cityCode,
        countyCode: req.body.countyCode,
        crossStreet: req.body.crossStreet,
        name: req.body.name,
        pOBoxNumber: req.body.pOBoxNumber,
        postalCode: req.body.postalCode,
        provinceCode: req.body.provinceCode,
        state: req.body.state,
        streetAddressOne: req.body.streetAddressOne,
        streetAddressTwo: req.body.streetAddressTwo,
        streetAddressThree: req.body.streetAddressThree,
    });
    const savedOfficialaddress = await officialaddress.save();
    res.status(200).json(savedOfficialaddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedOfficialaddress = await Officialaddress.remove({ _id: req.params.id });
    res.json(removedOfficialaddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedOfficialaddress = await Officialaddress.updateOne(
      { _id: req.params.id },
      {
        $set:{
             city: req.body.city,
             cityCode: req.body.cityCode,
             countyCode: req.body.countyCode,
             crossStreet: req.body.crossStreet,
             name: req.body.name,
             pOBoxNumber: req.body.pOBoxNumber,
             postalCode: req.body.postalCode,
             provinceCode: req.body.provinceCode,
             state: req.body.state,
             streetAddressOne: req.body.streetAddressOne,
             streetAddressTwo: req.body.streetAddressTwo,
             streetAddressThree: req.body.streetAddressThree,

        }
      }
    );
    res.json(updatedOfficialaddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;