const express = require("express");
const router = express.Router(); 
const verify = require("./verifyToken"); 
const Returnablepackagingtype = require("../models/Returnablepackagingtype");
const Returnableassetidentification= require("../models/Returnableassetidentification");

router.get("/", verify, async (req, res) => {
  try {
    const Returnablepackagingtypes = await Returnablepackagingtype.find();
    res.json(Returnablepackagingtypes);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.get("/:id", verify, async (req, res) => {
  try {
    const returnablepackagingtype = await Returnablepackagingtype.findById(req.params.id);
    res.json({
        _id: returnablepackagingtype._id,
        id: returnablepackagingtype.id,
        packagingQuantity: returnablepackagingtype.packagingQuantity,
        currentHolderRegistration: returnablepackagingtype.currentHolderRegistration,
        newHolderRegistration: returnablepackagingtype.newHolderRegistration,
        packagingConditionCode: returnablepackagingtype.packagingConditionCode,
        returnableAssetIdentification: returnablepackagingtype.returnableAssetIdentification,
        individualReturnableAssetIdentification: returnablepackagingtype.individualReturnableAssetIdentification,
        currentHolderRegistrationId: returnablepackagingtype.currentHolderRegistration.Id,
        newHolderRegistrationId: returnablepackagingtype.newHolderRegistration.Id,
        returnableAssetIdentificationId: returnablepackagingtype.returnableAssetIdentification.Id,
        individualReturnableAssetIdentificationId: returnablepackagingtype.individualReturnableAssetIdentification.Id,
        packagingConditionCodeId: returnablepackagingtype.packagingConditionCode.Id,
        createdAt: returnablepackagingtype.createdAt
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.post("/", verify, async (req, res) => {
  try {
    const currentholderregistrations = await Identifiertype.findById(req.body.currentHolderRegistrationId);
    const newholderregistrations = await Identifiertype.findById(req.body.newHolderRegistrationId);
    const returnableassetidentifications = await Returnableassetidentification.findById(req.body.returnableAssetIdentificationId);
    const individualreturnableassetidentifications = await Returnableassetidentification.findById(req.body.individualReturnableAssetIdentificationId);
    const packagingconditioncodes = await Enumerationlibrary.findById(req.body.packagingConditionCodeId);
    const returnablepackagingtype = new Returnablepackagingtype ({
        id: req.body.id,
        packagingQuantity: req.body.packagingQuantity,
        currentHolderRegistration: req.body.currentHolderRegistration,
        newHolderRegistration: req.body.newHolderRegistration,
        packagingConditionCode: req.body.packagingConditionCode,
        returnableAssetIdentification: req.body.returnableAssetIdentification,
        individualReturnableAssetIdentification: req.body.individualReturnableAssetIdentification,
        currentHolderRegistration: [{
          Id: currentholderregistrations._id,
          Name: currentholderregistrations.id
        }],
        newHolderRegistration: [{
          Id: newholderregistrations._id,
          Name: newholderregistrations.id
        }],
        returnableAssetIdentification: [{
          Id: returnableassetidentifications._id,
          Name: returnableassetidentifications.id
        }],
        individualReturnableAssetIdentification: [{
          Id: individualreturnableassetidentifications._id,
          Name: individualreturnableassetidentifications.id
        }],
        packagingConditionCode: [{
          Id: packagingconditioncodes._id,
          Name: packagingconditioncodes.id
        }],
    });
    const savedReturnablepackagingtype = await returnablepackagingtype.save();
    res.status(200).json(savedReturnablepackagingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.delete("/:id", verify, async (req, res) => {
  try {
    const removedReturnablepackagingtype = await Returnablepackagingtype.remove({ _id: req.params.id });
    res.json(removedReturnablepackagingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

router.put("/:id", verify, async (req, res) => {
  try {
    const currentholderregistration = await Identifiertype.findById(req.body.currentHolderRegistrationId);
    const returnableassetidentification = await Returnableassetidentification.findById(req.body.returnableAssetIdentificationId);
    const packagingconditioncode = await Enumerationlibrary.findById(req.body.packagingConditionCodeId);
    const updatedReturnablepackagingtype = await Returnablepackagingtype.updateOne(
      { _id: req.params.id },
      {
        $set:{
             id: req.body.id,
             packagingQuantity: req.body.packagingQuantity,
             currentHolderRegistration: req.body.currentHolderRegistration,
             newHolderRegistration: req.body.newHolderRegistration,
             packagingConditionCode: req.body.packagingConditionCode,
             returnableAssetIdentification: req.body.returnableAssetIdentification,
             individualReturnableAssetIdentification: req.body.individualReturnableAssetIdentification,
             packagingConditionCode: {
              Id: req.body.packagingconditioncode.id,
              Name: req.body.packagingconditioncode.id
             },
             packagingConditionCode: {
              Id: req.body.packagingconditioncode.id,
              Name: req.body.packagingconditioncode.id
             },
             packagingConditionCode: {
              Id: req.body.packagingconditioncode.id,
              Name: req.body.packagingconditioncode.id
             },
             packagingConditionCode: {
              Id: req.body.packagingconditioncode.id,
              Name: req.body.packagingconditioncode.id
             },
             packagingConditionCode: {
              Id: req.body.packagingconditioncode.id,
              Name: req.body.packagingconditioncode.id
             },

        }
      }
    );
    res.json(updatedReturnablepackagingtype);
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

module.exports = router;