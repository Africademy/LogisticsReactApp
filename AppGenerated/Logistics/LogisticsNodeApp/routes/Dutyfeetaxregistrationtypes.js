const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Dutyfeetaxregistrationtype = require("../models/Dutyfeetaxregistrationtype");
const Description80type= require("../models/Description80type");

router.get("/", verify, async (req, res) => {
  try {
    const Dutyfeetaxregistrationtypes = await Dutyfeetaxregistrationtype.find();
    res.json(Dutyfeetaxregistrationtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxregistrationtype = await Dutyfeetaxregistrationtype.findById(req.params.id);
    res.json({
        _id: dutyfeetaxregistrationtype._id,
        id: dutyfeetaxregistrationtype.id,
        dutyFeeTaxRegistrationID: dutyfeetaxregistrationtype.dutyFeeTaxRegistrationID,
        dutyFeeTaxTypeCode: dutyfeetaxregistrationtype.dutyFeeTaxTypeCode,
        dutyFeeTaxAgencyName: dutyfeetaxregistrationtype.dutyFeeTaxAgencyName,
        dutyFeeTaxDescription: dutyfeetaxregistrationtype.dutyFeeTaxDescription,
        dutyFeeTaxDescriptionId: dutyfeetaxregistrationtype.dutyFeeTaxDescription.Id,
        dutyFeeTaxRegistrationIDId: dutyfeetaxregistrationtype.dutyFeeTaxRegistrationID.Id,
        dutyFeeTaxTypeCodeId: dutyfeetaxregistrationtype.dutyFeeTaxTypeCode.Id,
        createdAt: dutyfeetaxregistrationtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const dutyfeetaxdescriptions = await Description80type.findById(req.body.dutyFeeTaxDescriptionId);
    const dutyfeetaxregistrationids = await Identifiertype.findById(req.body.dutyFeeTaxRegistrationIDId);
    const dutyfeetaxtypecodes = await Enumerationlibrary.findById(req.body.dutyFeeTaxTypeCodeId);
    const dutyfeetaxregistrationtype = new Dutyfeetaxregistrationtype ({
        id: req.body.id,
        dutyFeeTaxRegistrationID: req.body.dutyFeeTaxRegistrationID,
        dutyFeeTaxTypeCode: req.body.dutyFeeTaxTypeCode,
        dutyFeeTaxAgencyName: req.body.dutyFeeTaxAgencyName,
        dutyFeeTaxDescription: req.body.dutyFeeTaxDescription,
        dutyFeeTaxDescription: [{
          Id: dutyfeetaxdescriptions._id,
          Name: dutyfeetaxdescriptions.id
        }],
        dutyFeeTaxRegistrationID: [{
          Id: dutyfeetaxregistrationids._id,
          Name: dutyfeetaxregistrationids.id
        }],
        dutyFeeTaxTypeCode: [{
          Id: dutyfeetaxtypecodes._id,
          Name: dutyfeetaxtypecodes.id
        }],
    });
    const savedDutyfeetaxregistrationtype = await dutyfeetaxregistrationtype.save();
    res.status(200).json(savedDutyfeetaxregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedDutyfeetaxregistrationtype = await Dutyfeetaxregistrationtype.remove({ _id: req.params.id });
    res.json(removedDutyfeetaxregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const dutyfeetaxdescription = await Description80type.findById(req.body.dutyFeeTaxDescriptionId);
    const dutyfeetaxregistrationid = await Identifiertype.findById(req.body.dutyFeeTaxRegistrationIDId);
    const dutyfeetaxtypecode = await Enumerationlibrary.findById(req.body.dutyFeeTaxTypeCodeId);
    const updatedDutyfeetaxregistrationtype = await Dutyfeetaxregistrationtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             dutyFeeTaxRegistrationID: req.body.dutyFeeTaxRegistrationID,
             dutyFeeTaxTypeCode: req.body.dutyFeeTaxTypeCode,
             dutyFeeTaxAgencyName: req.body.dutyFeeTaxAgencyName,
             dutyFeeTaxDescription: req.body.dutyFeeTaxDescription,
             dutyFeeTaxTypeCode: {
              Id: req.body.dutyfeetaxtypecode.id,
              Name: req.body.dutyfeetaxtypecode.id
             },
             dutyFeeTaxTypeCode: {
              Id: req.body.dutyfeetaxtypecode.id,
              Name: req.body.dutyfeetaxtypecode.id
             },
             dutyFeeTaxTypeCode: {
              Id: req.body.dutyfeetaxtypecode.id,
              Name: req.body.dutyfeetaxtypecode.id
             },

        }
      }
    );
    res.json(updatedDutyfeetaxregistrationtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;