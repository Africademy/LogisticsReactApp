const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Passengerinformationtype = require("../models/Passengerinformationtype");

router.get("/", verify, async (req, res) => {
  try {
    const Passengerinformationtypes = await Passengerinformationtype.find();
    res.json(Passengerinformationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const passengerinformationtype = await Passengerinformationtype.findById(req.params.id);
    res.json({
        _id: passengerinformationtype._id,
        id: passengerinformationtype.id,
        numberOfPassengers: passengerinformationtype.numberOfPassengers,
        passengerCategoryCode: passengerinformationtype.passengerCategoryCode,
        passengerTariffGroup: passengerinformationtype.passengerTariffGroup,
        person: passengerinformationtype.person,
        passengerCategoryCodeId: passengerinformationtype.passengerCategoryCode.Id,
        createdAt: passengerinformationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const passengercategorycodes = await Enumerationlibrary.findById(req.body.passengerCategoryCodeId);
    const passengerinformationtype = new Passengerinformationtype ({
        id: req.body.id,
        numberOfPassengers: req.body.numberOfPassengers,
        passengerCategoryCode: req.body.passengerCategoryCode,
        passengerTariffGroup: req.body.passengerTariffGroup,
        person: req.body.person,
        passengerCategoryCode: [{
          Id: passengercategorycodes._id,
          Name: passengercategorycodes.id
        }],
    });
    const savedPassengerinformationtype = await passengerinformationtype.save();
    res.status(200).json(savedPassengerinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedPassengerinformationtype = await Passengerinformationtype.remove({ _id: req.params.id });
    res.json(removedPassengerinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const passengercategorycode = await Enumerationlibrary.findById(req.body.passengerCategoryCodeId);
    const updatedPassengerinformationtype = await Passengerinformationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             numberOfPassengers: req.body.numberOfPassengers,
             passengerCategoryCode: req.body.passengerCategoryCode,
             passengerTariffGroup: req.body.passengerTariffGroup,
             person: req.body.person,
             passengerCategoryCode: {
              Id: req.body.passengercategorycode.id,
              Name: req.body.passengercategorycode.id
             },

        }
      }
    );
    res.json(updatedPassengerinformationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;