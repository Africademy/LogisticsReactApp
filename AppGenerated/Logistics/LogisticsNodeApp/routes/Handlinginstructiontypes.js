const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Handlinginstructiontype = require("../models/Handlinginstructiontype");
const Temperaturerangetype= require("../models/Temperaturerangetype");

router.get("/", verify, async (req, res) => {
  try {
    const Handlinginstructiontypes = await Handlinginstructiontype.find();
    res.json(Handlinginstructiontypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const handlinginstructiontype = await Handlinginstructiontype.findById(req.params.id);
    res.json({
        _id: handlinginstructiontype._id,
        id: handlinginstructiontype.id,
        handlingInstructionCode: handlinginstructiontype.handlingInstructionCode,
        handlingInstructionText: handlinginstructiontype.handlingInstructionText,
        printingInstructionCode: handlinginstructiontype.printingInstructionCode,
        storageTemperature: handlinginstructiontype.storageTemperature,
        transportTemperature: handlinginstructiontype.transportTemperature,
        handlingInstructionTextId: handlinginstructiontype.handlingInstructionText.Id,
        storageTemperatureId: handlinginstructiontype.storageTemperature.Id,
        transportTemperatureId: handlinginstructiontype.transportTemperature.Id,
        handlingInstructionCodeId: handlinginstructiontype.handlingInstructionCode.Id,
        printingInstructionCodeId: handlinginstructiontype.printingInstructionCode.Id,
        createdAt: handlinginstructiontype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const handlinginstructiontexts = await Description500type.findById(req.body.handlingInstructionTextId);
    const storagetemperatures = await Temperaturerangetype.findById(req.body.storageTemperatureId);
    const transporttemperatures = await Temperaturerangetype.findById(req.body.transportTemperatureId);
    const handlinginstructioncodes = await Enumerationlibrary.findById(req.body.handlingInstructionCodeId);
    const printinginstructioncodes = await Enumerationlibrary.findById(req.body.printingInstructionCodeId);
    const handlinginstructiontype = new Handlinginstructiontype ({
        id: req.body.id,
        handlingInstructionCode: req.body.handlingInstructionCode,
        handlingInstructionText: req.body.handlingInstructionText,
        printingInstructionCode: req.body.printingInstructionCode,
        storageTemperature: req.body.storageTemperature,
        transportTemperature: req.body.transportTemperature,
        handlingInstructionText: [{
          Id: handlinginstructiontexts._id,
          Name: handlinginstructiontexts.id
        }],
        storageTemperature: [{
          Id: storagetemperatures._id,
          Name: storagetemperatures.id
        }],
        transportTemperature: [{
          Id: transporttemperatures._id,
          Name: transporttemperatures.id
        }],
        handlingInstructionCode: [{
          Id: handlinginstructioncodes._id,
          Name: handlinginstructioncodes.id
        }],
        printingInstructionCode: [{
          Id: printinginstructioncodes._id,
          Name: printinginstructioncodes.id
        }],
    });
    const savedHandlinginstructiontype = await handlinginstructiontype.save();
    res.status(200).json(savedHandlinginstructiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedHandlinginstructiontype = await Handlinginstructiontype.remove({ _id: req.params.id });
    res.json(removedHandlinginstructiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const handlinginstructiontext = await Description500type.findById(req.body.handlingInstructionTextId);
    const storagetemperature = await Temperaturerangetype.findById(req.body.storageTemperatureId);
    const handlinginstructioncode = await Enumerationlibrary.findById(req.body.handlingInstructionCodeId);
    const updatedHandlinginstructiontype = await Handlinginstructiontype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             handlingInstructionCode: req.body.handlingInstructionCode,
             handlingInstructionText: req.body.handlingInstructionText,
             printingInstructionCode: req.body.printingInstructionCode,
             storageTemperature: req.body.storageTemperature,
             transportTemperature: req.body.transportTemperature,
             handlingInstructionCode: {
              Id: req.body.handlinginstructioncode.id,
              Name: req.body.handlinginstructioncode.id
             },
             handlingInstructionCode: {
              Id: req.body.handlinginstructioncode.id,
              Name: req.body.handlinginstructioncode.id
             },
             handlingInstructionCode: {
              Id: req.body.handlinginstructioncode.id,
              Name: req.body.handlinginstructioncode.id
             },
             handlingInstructionCode: {
              Id: req.body.handlinginstructioncode.id,
              Name: req.body.handlinginstructioncode.id
             },
             handlingInstructionCode: {
              Id: req.body.handlinginstructioncode.id,
              Name: req.body.handlinginstructioncode.id
             },

        }
      }
    );
    res.json(updatedHandlinginstructiontype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;