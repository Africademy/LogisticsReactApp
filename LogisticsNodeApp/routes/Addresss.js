const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Address = require("../models/Address");

router.get("/", verify, async (req, res) => {
  try {
    const Addresss = await Address.find();
    res.json(Addresss);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const address = await Address.findById(req.params.id);
    res.json({
        _id: address._id,
        id: address.id,
        city: address.city,
        cityCode: address.cityCode,
        countyCode: address.countyCode,
        crossStreet: address.crossStreet,
        name: address.name,
        pOBoxNumber: address.pOBoxNumber,
        postalCode: address.postalCode,
        provinceCode: address.provinceCode,
        state: address.state,
        streetAddressOne: address.streetAddressOne,
        streetAddressTwo: address.streetAddressTwo,
        streetAddressThree: address.streetAddressThree,
        createdAt: address.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const address = new Address ({
        id: req.body.id,
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
    const savedAddress = await address.save();
    res.status(200).json(savedAddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedAddress = await Address.remove({ _id: req.params.id });
    res.json(removedAddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const updatedAddress = await Address.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
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
    res.json(updatedAddress);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;