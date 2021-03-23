const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Logisticlocationtype = require("../models/Logisticlocationtype");
const Operatinghourstype= require("../models/Operatinghourstype");
const Specialoperatinghourstype= require("../models/Specialoperatinghourstype");

router.get("/", verify, async (req, res) => {
  try {
    const Logisticlocationtypes = await Logisticlocationtype.find();
    res.json(Logisticlocationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const logisticlocationtype = await Logisticlocationtype.findById(req.params.id);
    res.json({
        _id: logisticlocationtype._id,
        id: logisticlocationtype.id,
        unLocationCode: logisticlocationtype.unLocationCode,
        gln: logisticlocationtype.gln,
        additionalLocationIdentification: logisticlocationtype.additionalLocationIdentification,
        sublocationIdentification: logisticlocationtype.sublocationIdentification,
        locationName: logisticlocationtype.locationName,
        locationSpecificInstructions: logisticlocationtype.locationSpecificInstructions,
        utcOffset: logisticlocationtype.utcOffset,
        address: logisticlocationtype.address,
        contact: logisticlocationtype.contact,
        regularOperatingHours: logisticlocationtype.regularOperatingHours,
        specialOperatingHours: logisticlocationtype.specialOperatingHours,
        locationSpecificInstructionsId: logisticlocationtype.locationSpecificInstructions.Id,
        additionalLocationIdentificationId: logisticlocationtype.additionalLocationIdentification.Id,
        regularOperatingHoursId: logisticlocationtype.regularOperatingHours.Id,
        specialOperatingHoursId: logisticlocationtype.specialOperatingHours.Id,
        addressId: logisticlocationtype.address.Id,
        contactId: logisticlocationtype.contact.Id,
        unLocationCodeId: logisticlocationtype.unLocationCode.Id,
        createdAt: logisticlocationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const locationspecificinstructionss = await Description200type.findById(req.body.locationSpecificInstructionsId);
    const additionallocationidentifications = await Identifiertype.findById(req.body.additionalLocationIdentificationId);
    const regularoperatinghourss = await Operatinghourstype.findById(req.body.regularOperatingHoursId);
    const specialoperatinghourss = await Specialoperatinghourstype.findById(req.body.specialOperatingHoursId);
    const addresss = await Address.findById(req.body.addressId);
    const contacts = await Contacttype.findById(req.body.contactId);
    const unlocationcodes = await Enumerationlibrary.findById(req.body.unLocationCodeId);
    const logisticlocationtype = new Logisticlocationtype ({
        id: req.body.id,
        unLocationCode: req.body.unLocationCode,
        gln: req.body.gln,
        additionalLocationIdentification: req.body.additionalLocationIdentification,
        sublocationIdentification: req.body.sublocationIdentification,
        locationName: req.body.locationName,
        locationSpecificInstructions: req.body.locationSpecificInstructions,
        utcOffset: req.body.utcOffset,
        address: req.body.address,
        contact: req.body.contact,
        regularOperatingHours: req.body.regularOperatingHours,
        specialOperatingHours: req.body.specialOperatingHours,
        locationSpecificInstructions: [{
          Id: locationspecificinstructionss._id,
          Name: locationspecificinstructionss.id
        }],
        additionalLocationIdentification: [{
          Id: additionallocationidentifications._id,
          Name: additionallocationidentifications.id
        }],
        regularOperatingHours: [{
          Id: regularoperatinghourss._id,
          Name: regularoperatinghourss.id
        }],
        specialOperatingHours: [{
          Id: specialoperatinghourss._id,
          Name: specialoperatinghourss.id
        }],
        address: [{
          Id: addresss._id,
          Name: addresss.id
        }],
        contact: [{
          Id: contacts._id,
          Name: contacts.id
        }],
        unLocationCode: [{
          Id: unlocationcodes._id,
          Name: unlocationcodes.id
        }],
    });
    const savedLogisticlocationtype = await logisticlocationtype.save();
    res.status(200).json(savedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedLogisticlocationtype = await Logisticlocationtype.remove({ _id: req.params.id });
    res.json(removedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const locationspecificinstructions = await Description200type.findById(req.body.locationSpecificInstructionsId);
    const additionallocationidentification = await Identifiertype.findById(req.body.additionalLocationIdentificationId);
    const regularoperatinghours = await Operatinghourstype.findById(req.body.regularOperatingHoursId);
    const specialoperatinghours = await Specialoperatinghourstype.findById(req.body.specialOperatingHoursId);
    const address = await Address.findById(req.body.addressId);
    const contact = await Contacttype.findById(req.body.contactId);
    const unlocationcode = await Enumerationlibrary.findById(req.body.unLocationCodeId);
    const updatedLogisticlocationtype = await Logisticlocationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             unLocationCode: req.body.unLocationCode,
             gln: req.body.gln,
             additionalLocationIdentification: req.body.additionalLocationIdentification,
             sublocationIdentification: req.body.sublocationIdentification,
             locationName: req.body.locationName,
             locationSpecificInstructions: req.body.locationSpecificInstructions,
             utcOffset: req.body.utcOffset,
             address: req.body.address,
             contact: req.body.contact,
             regularOperatingHours: req.body.regularOperatingHours,
             specialOperatingHours: req.body.specialOperatingHours,
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },
             unLocationCode: {
              Id: req.body.unlocationcode.id,
              Name: req.body.unlocationcode.id
             },

        }
      }
    );
    res.json(updatedLogisticlocationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;